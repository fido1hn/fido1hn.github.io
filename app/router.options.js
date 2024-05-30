export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  scrollBehavior(to, from, savedPosition) {
    // `to` and `from` are both route locations
    // `savedPosition` can be null if there isn't one

    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return {
      left: 0,
      right: 0,
      behavior: 'smooth',
    };
  },
};
