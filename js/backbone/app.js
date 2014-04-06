$(document).ready(function() {
  var population = new DailyPopulationCollection();

  var population_table = new StatsTableView({
    el: $("#poblacion-diaria .stats"),
    collection: population,
    template: $('#population-table-template').html(),
  });

  var population_chart = new DailyPopulationChartView({
    el: $("#poblacion-diaria .chart"),
    collection: population
  });
  
/*
  var fill_population_el = new StatsTableView({
    el: $("#content #population"),
    collection: population,
    template: $('#population_template').html(),
  });
  

*/
  var fill_migrates_el = new StatsTableView({
    el: $("#content #migrates_info"),
    collection: population,
    template: $('#migrates_template').html(),
  });

  var fill_population_el = new StatsTableView({
    el: $("#content #population_info"),
    collection: population,
    template: $('#population_template').html(),
  });
  population.fetch();
});
