const app = new Vue({
  el: "#app",
  delimiters: ['${', '}'],
  data: {
    results: null,
  },
  computed: {
    pulledResults: function() {
      return this.results && typeof this.results['total_frost_resistance'] !== 'undefined';
    },
    mitigation: function() {
      if (!this.pulledResults) return;
      return Math.floor(this.results['total_frost_resistance'] / 420 * 100);
    },
    damageTakenPerSecond: function() {
      if (!this.pulledResults) return;
      return Math.floor((100 - this.mitigation) / 100 * 300);
    },
    showOthers: function() {
      if (!this.pulledResults) return;
      return this.results['others']['is_dwarf'] || this.results['others']['frost_resist_cloak_enchant'];
    }
  },
  mounted: function() {
    this.results = JSON.parse(document.getElementById('results').textContent);
    console.log(this.results);
  },
});