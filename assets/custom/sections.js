/*
 * Single-page home navigation for mdsaifulislamsajol.github.io
 *
 * On the home page every main section is rendered one after another.
 * This script:
 *   1. scrolls smoothly to a section when its navbar link is clicked,
 *   2. highlights the navbar item of the section currently in view,
 *   3. fades sections in as they scroll into view.
 * On other pages it does nothing; navbar links there point to /#section,
 * so the browser opens the home page at that section.
 */
(function () {
  "use strict";

  var home = document.querySelector("[data-sx-home]");
  if (!home) return;

  var root = document.documentElement;
  root.classList.add("sx-js");

  var sections = Array.prototype.slice.call(home.querySelectorAll(".sx-section[id]"));
  var navItems = Array.prototype.slice.call(document.querySelectorAll("#navbar .nav-item[data-section]"));
  var navById = {};
  navItems.forEach(function (li) {
    navById[li.getAttribute("data-section")] = li;
  });

  // Sections without their own navbar item (for example "moments", "contact")
  // highlight the closest preceding section that has one.
  function navTargetFor(id) {
    var idx = -1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === id) idx = i;
    }
    for (var j = idx; j >= 0; j--) {
      if (navById[sections[j].id]) return navById[sections[j].id];
    }
    return navById.about || null;
  }

  // ---- 1. smooth scroll from navbar links ----
  function closeMobileMenu() {
    var collapse = document.getElementById("navbarNav");
    var toggler = document.querySelector(".navbar-toggler-main");
    if (collapse && toggler && collapse.classList.contains("show")) {
      toggler.click();
    }
  }

  document.querySelectorAll("#navbar a[data-section]").forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var id = a.getAttribute("data-section");
      var target = document.getElementById(id);
      if (!target) return; // fall back to normal navigation
      ev.preventDefault();
      if (id === "about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (history.replaceState) history.replaceState(null, "", "#" + id);
      closeMobileMenu();
    });
  });

  // ---- 2. highlight the section in view ----
  var current = null;
  function setActive(li) {
    if (li === current) return;
    navItems.forEach(function (n) {
      n.classList.remove("sx-active");
      n.classList.remove("active");
    });
    if (li) li.classList.add("sx-active");
    current = li;
  }

  function onScroll() {
    var probe = window.innerHeight * 0.3;
    var activeId = sections.length ? sections[0].id : null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - probe <= 0) activeId = sections[i].id;
    }
    // At the very bottom, the last section is the active one.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeId = sections[sections.length - 1].id;
    }
    setActive(activeId ? navTargetFor(activeId) : null);
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", onScroll);

  // ---- 3. reveal sections as they enter the viewport ----
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("sx-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 }
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  } else {
    sections.forEach(function (s) {
      s.classList.add("sx-visible");
    });
  }

  // Sections already above the fold (or reached through a #hash) show at once.
  function revealPassed() {
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top < window.innerHeight) s.classList.add("sx-visible");
    });
  }

  // When the page is opened at a #section (for example from another page's
  // navbar), re-align once images have loaded, since they can shift content.
  var userMoved = false;
  ["wheel", "touchmove", "keydown", "mousedown"].forEach(function (evt) {
    window.addEventListener(evt, function () {
      userMoved = true;
    }, { passive: true, once: true });
  });

  function alignToHash() {
    if (userMoved) return;
    var id = decodeURIComponent((location.hash || "").slice(1));
    var target = id && document.getElementById(id);
    if (target && sections.indexOf(target) > -1) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  window.addEventListener("load", function () {
    alignToHash();
    revealPassed();
    onScroll();
    // a second pass catches late layout changes (fonts, badges)
    setTimeout(function () {
      alignToHash();
      onScroll();
    }, 600);
  });
  revealPassed();
  onScroll();
})();
