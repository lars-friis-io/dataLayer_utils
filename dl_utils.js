(function() {
  window.dataLayerUtils = window.dataLayerUtils || {};

  window.dataLayerUtils.getUntrustedMessageValue = function(index) {
    if (!window.dataLayer) {
      return undefined;
    }

    if (!window.dataLayer[index]) {
      return undefined;
    }

    if (typeof window.dataLayer[index].getUntrustedMessageValue !== 'function') {
      return undefined;
    }

    return window.dataLayer[index].getUntrustedMessageValue();
  };
})();
