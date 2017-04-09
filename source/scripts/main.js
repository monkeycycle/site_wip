
var projects = [
  {img: 'nyt',                  date: '05/2016',   url: 'http://www.nytimes.com/by/adam-pearce'},
  {img: 'who-marries-whom',     date: '02/2016',   url: 'http://www.bloomberg.com/graphics/2016-who-marries-whom/'},
  {img: 'donor-network',        date: '02/2016',   url: 'http://www.bloomberg.com/politics/graphics/2016-fec-filings/febuary/bush-donors/'},
  {img: 'nba-win-loss',         date: '01/2016',   url: 'http://roadtolarissa.com/nba-win-loss/'},

  {img: 'crossover-sales',      date: '01/2016',   url: 'http://www.bloomberg.com/graphics/2016-crossover-sales/'},
  {img: 'nba-minutes',          date: '01/2016',   url: 'http://roadtolarissa.com/nba-minutes/'},

  {img: 'trading-analysis',     date: '12/2015',   url: 'http://www.bloomberg.com/features/2015-stock-chart-trading-game/analysis/'},
  {img: 'florida-redistricting',date: '12/2015',   url: 'http://www.bloomberg.com/politics/graphics/2015-redistricting/'},

  {img: 'gsw-streak',           date: '11/2015',   url: 'http://roadtolarissa.com/gsw-streak/'},
  {img: 'year-ahead',           date: '11/2015',   url: 'http://www.bloomberg.com/graphics/year-ahead-2016/'},

  {img: 'individual-donor',     date: '10/2015',   url: 'http://www.bloomberg.com/politics/graphics/2015-october-fec-filings/charts/'},
  {img: 'speaker-timeline',     date: '10/2015',   url: 'http://www.bloomberg.com/politics/graphics/2015-paul-ryan-speaker-of-the-house/'},
  {img: 'spoofing',             date: '09/2015',   url: 'http://www.bloomberg.com/graphics/2015-spoofing/'},
  {img: 'fifa-scandal',         date: '07/2015',   url: 'http://www.bloomberg.com/graphics/2015-fifa-scandal/'},
  {img: 'stacked-bump',         date: '07/2015',   url: 'http://roadtolarissa.com/stacked-bump/'},
  // {img: 'super-pac-table',      date: '08/2015',   url: 'http://www.bloomberg.com/politics/graphics/2015-october-fec-filings/table/'},
  {img: 'money-map',            date: '09/2015',   url: 'http://www.bloomberg.com/politics/graphics/2015-presidential-money-map/'},

  {img: 'lyric-type',            date: '08/2015',   url: 'http://roadtolarissa.com/lyric-type/'},


  {img: 'what-is-code',         date: '06/2015',   url: 'http://www.bloomberg.com/whatiscode'},
  {img: 'dangerous-jobs',       date: '05/2015',   url: 'http://www.bloomberg.com/graphics/2015-dangerous-jobs/'},
  {img: 'uk-election',          date: '05/2015',   url: 'http://www.bloomberg.com/graphics/2015-uk-election/'},
  {img: 'uk-splatter',          date: '05/2015',   url: 'http://www.bloomberg.com/graphics/2015-uk-election/messy.html'},
  {img: 'weed-index',           date: '04/2015',   url: 'http://www.bloomberg.com/graphics/2015-weed-index/'},
  {img: 'ncaa-gambling',        date: '04/2015',   url: 'http://www.bloomberg.com/graphics/2015-march-madness-gambling/'},
  {img: 'basketball-fund',      date: '03/2015',   url: 'http://www.bloomberg.com/graphics/2015-march-madness-basketball-fund/'},
  {img: 'measles-outbreaks',    date: '02/2015',   url: 'http://www.bloomberg.com/graphics/2015-measles-outbreaks/'},
  {img: 'oscar-winners',        date: '02/2015',   url: 'http://www.bloomberg.com/graphics/2015-oscar-winners/'},
  {img: 'superbowl-salary',     date: '01/2015',   url: 'http://www.bloomberg.com/graphics/2015-nfl-super-bowl-salary/'},
  {img: 'auto-sales',           date: '01/2015',   url: 'http://www.bloomberg.com/graphics/2015-auto-sales/'},
  {img: 'space-race',           date: '01/2015',   url: 'http://www.bloomberg.com/news/features/2015-01-22/the-new-space-race-one-man-s-mission-to-build-a-galactic-internet-i58i2dp6'},



  {img: 'campaign-declaration', date: '11/2014',   url: 'http://www.bloomberg.com/politics/articles/2014-11-25/when-do-presidential-candidates-announce'},
  {img: 'live-midterm-results', date: '11/2014',   url: 'http://www.bloomberg.com/politics/topics/2014-midterms'},
  // {img: 'senate-ads',           date: '10/2014',   url: 'http://www.bloomberg.com/politics/features/2014-10-27/the-persuadables'},
  {img: 'midterm-ads',          date: '10/2014',   url: 'http://www.bloomberg.com/politics/graphics/2014-senate-ads-and-issues/'},
  {img: 'governor-jobs',        date: '10/2014',   url: 'http://www.bloomberg.com/politics/graphics/2014-incumbent-governors/'},

  {img: 'zhou-crackdown',       date: '09/2014',   url: 'http://www.bloomberg.com/infographics/2014-08-04/how-to-catch-a-tiger.html'},
  {img: 'world-cup',            date: '05/2014',   url: 'http://www.bloomberg.com/visual-data/world-cup/#0,0,-1'},


  {img: 'golf-paths',           date: '10/2014',   url: 'http://roadtolarissa.com/golf-paths/'},
  {img: 'drawdown',             date: '09/2014',  url: 'http://roadtolarissa.com/drawdown/'},
  {img: 'svg-path',             date: '02/2015',  url: 'http://roadtolarissa.com/blog/2015/02/22/svg-path-strings/'},

  {img: 'coloring-maps',        date: '01/2015',   url: 'http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/'},
  {img: 'data-exploration',     date: '04/2015',   url: 'http://roadtolarissa.com/data-exploration/'},
  {img: 'graph-scroll',         date: '03/2015',   url: 'http://1wheel.github.io/graph-scroll/'},
  {img: 'convex-hulls',         date: '12/2014',   url: 'http://roadtolarissa.com/convex-hulls/'},



  {img: '215-teeth',            date: '06/2014',   url: 'http://roadtolarissa.com/215-teeth/'},
  {img: 'joymap',               date: '03/2014',   url: 'http://roadtolarissa.com/population-division/'},
  {img: 'synth-scale',          date: '01/2014',   url: 'http://roadtolarissa.com/synth/'},
  {img: 'twisters',             date: '10/2013',   url: 'http://roadtolarissa.com/twisters/'},
  {img: 'nba-draft',            date: '06/2013',   url: 'http://roadtolarissa.com/nba-draft/'},
  {img: 'meteors',              date: '05/2013',   url: 'http://roadtolarissa.com/meteors/'},
  {img: 'film-strips',          date: '05/2013',   url: 'http://roadtolarissa.com/film-strips/'},
  {img: 'whale-words',          date: '01/2013',   url: 'http://www.roadtolarissa.com/whalewords'},
  {img: 'unemployment-rates',   date: '01/2013',    url: 'http://www.roadtolarissa.com/unemployment'},
  {img: 'sierpinski-triangle',  date: '12/2012',   url: 'http://roadtolarissa.com/triangles/'},
  {img: 'whitehouse-petitions', date: '12/2012',   url: 'http://www.roadtolarissa.com/whitehouse'},
  {img: 'redditgraphs',         date: '10/2012',   url: 'http://www.roadtolarissa.com/redditgraphs'},
  {img: 'backgammon',           date: '10/2012',    url: 'http://www.roadtolarissa.com/javascript/hangout-boardgames/'},
  {img: 'connect-4',            date: '09/2012',     url: 'http://www.roadtolarissa.com/connect-4-ai-how-it-works/'},
];


// 375


projects = _.sortBy(projects, ƒ('date', d3.time.format('%m/%Y').parse)).reverse()

var s = 750/4,
    numX = 4,
    width = s*numX,
    height = s*Math.ceil(projects.length/numX)

var boxes = projects.map(function(d, i){
  return {
    pos: [s*(i % numX) + s/2, s*(Math.floor(i/numX)) + s/2],
    i: i,
    id: 'clip-' + i,
    clipId: 'url(#clip-' + i + ')',
    name: d.img,
    imgUrl: '/images/thumbnails/' + d.img + '.png',
    url: d.url,
    date: d.date,
  }
})


var svg = d3.select('#gallery')
  .append('svg')
    .attr({width: width, height: height})

svg.append('defs').dataAppend(boxes, 'clipPath')
    .attr('id', ƒ('id'))
  .append('rect')
    .attr({width: s, height: s})
    .attr({x: -s/2, y: -s/2})
    .each(function(d){ d.clip = d3.select(this) })


var boxGs = svg.dataAppend(boxes, 'g')
    .translate(ƒ('pos'))
    .attr('clip-path', ƒ('clipId'))
    .on('mouseover', function(){
      this.parentNode.appendChild(this)
    })
    .on('mousemove', function(d){
      sizeSquare(d, _.max(d3.mouse(this).map(Math.abs))/(s/2))
    })
    .on('mouseout', function(d){ sizeSquare(d, 1) })
    .on('click', function(d){ window.open(d.url, '_blank') })

// boxGs.append('rect')
//     .attr({width: s*2, height: s*2})
//     .attr({x: -s, y: -s})
//     .attr('fill', function(){ return randColor() })
//     .each(function(d){ d.rect = d3.select(this) })

boxGs.append('image')
    .attr({width: s*2, height: s*2})
    .attr({x: -s, y: -s})
    .attr('xlink:href', ƒ('imgUrl'))
    .each(function(d){ d.img = d3.select(this) })


boxGs.append('rect.border')
    .attr({width: s, height: s})
    .attr({x: -s/2, y: -s/2})
    .each(function(d){ d.border = d3.select(this) })

boxGs.append('rect.border')
    .attr({width: s, height: 0})
    .attr({x: -s/2, y: -s/2})
    .each(function(d){ d.bot = d3.select(this) })

boxGs.append('text').attr({dx: '1em', dy: '-1.0em'})
    .text(ƒ('name'))
    .style('font-size', '0px')
    .attr('text-anchor', 'start')
    .each(function(d){ d.name = d3.select(this) })

boxGs.append('text').attr({dx: '-1em', dy: '-1.0em'})
    .text(ƒ('date'))
    .style('font-size', '0px')
    .attr('text-anchor', 'end')
    .each(function(d){ d.date = d3.select(this) })

function sizeSquare(d, t){
  t = clamp(0, t, 1)
  t = Math.pow(t, 2)

  var l = (2 - t)*s

  var rectAttr = {width: l, height: l, x: -l/2, y: -l/2}

  d.clip.attr(rectAttr)
  d.border.attr(rectAttr)
      .style('stroke-width', (20*(1 - t) + 2))

  d.bot.attr(rectAttr)
      .attr({y: l/2, height: .1})
      .style('stroke-width', (120*(1 - t) + 1))

  d.name.style('font-size', 23*(1 - t) + 'px')
      .attr({x: -l/2, y: l/2})

  d.date.style('font-size', 23*(1 - t) + 'px')
      .attr({x: l/2, y: l/2})
}

function clamp(min, d, max){
  return Math.min(max, Math.max(min, d))
}