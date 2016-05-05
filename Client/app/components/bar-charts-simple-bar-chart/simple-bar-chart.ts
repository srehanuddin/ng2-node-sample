import { Component, ElementRef, ViewEncapsulation } from "angular2/core" ;
import * as d3 from 'd3';

@Component({
    selector: 'simple-bar-chart',
    directives: [],
    styleUrls : ["./app/components/bar-charts-simple-bar-chart/style.css"],
    //styles : [":host >>> .bar { fill: steelblue;}"],
    //encapsulation: ViewEncapsulation.None,
    templateUrl: "./app/components/bar-charts-simple-bar-chart/simple-bar-chart.html"
})
export class SimpleBarChartComponent {
    constructor(public elementRef: ElementRef){
    } 
    
    ngOnInit(){     
       
        var el = this.elementRef.nativeElement;
        var attrName = el.children && el.children[0] && el.children[0].attributes && el.children[0].attributes[0] && el.children[0].attributes[0].name;
       
        var componentContainer = d3.select(this.elementRef.nativeElement);
        
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "%");

        var svg = componentContainer.select("#display")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr(attrName, "")
            .append("g")
            .attr(attrName, "")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("app/components/bar-charts-simple-bar-chart/data.tsv", type, function(error, data) {
        if (error) throw error;

        x.domain(data.map(function(d) { return d.letter; }));
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

        svg.append("g")
            .attr(attrName, "")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr(attrName, "")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr(attrName, "")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr(attrName, "")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.letter); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.frequency); })
            .attr("height", function(d) { return height - y(d.frequency); });
        });

        function type(d) {
            d.frequency = +d.frequency;
            return d;
        }
        
    }
}


