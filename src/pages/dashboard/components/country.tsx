import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Dialog from './dialog';
import { CardDescription } from '@/components/ui/card';

const BarChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const data = [
    { country: 'Cur', value: 72.4, colors: ['#002B7F', '#F9E814'] },
    { country: 'Kuw', value: 59.1, colors: ['#000000', '#CE1126', '#FFFFFF'] },
    { country: 'Suri', value: 52.7, colors: ['#377E3F', '#FFFFFF', '#B40A2D'] },
    { country: 'Fin', value: 44.2, colors: ['#FFFFFF', '#003580'] },
    { country: 'Lat', value: 42.4, colors: ['#9E3039', '#FFFFFF'] },
    { country: 'Saudi', value: 41.6, colors: ['#006C35', '#FFFFFF'] },
    { country: 'Est', value: 35.1, colors: ['#0072CE', '#000000', '#FFFFFF'] },
    { country: 'Bah', value: 32.1, colors: ['#CE1126', '#FFFFFF'] },
    { country: 'Aus', value: 35.1, colors: ['#ED2939', '#FFFFFF'] },
    { country: 'Aui', value: 34.1, colors: ['#ED2939', '#FFFFFF'] },
    { country: 'Lit', value: 32.1, colors: ['#FDB913', '#006A44', '#C1272D'] },
    { country: 'Li', value: 30.1, colors: ['#FDB913', '#006A44', '#C1272D'] }
  ];

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: width,
          height: Math.min(width * 0.6, 500) // Maintain aspect ratio with max height
        });
      }
    };

    handleResize(); // Initial size

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Draw chart
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up margins based on container size
    const margin = {
      top: dimensions.height * 0.1,
      right: dimensions.width * 0.06,
      bottom: dimensions.height * 0.2,
      left: dimensions.width * 0.1
    };

    const width = dimensions.width - margin.left - margin.right + 210;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
      .append('g')
      .attr('transform', `translate(${margin.left - 100},${margin.top + 30})`);

    // Create gradient and patterns
    const defs = svg.append('defs');

    // Bar gradient
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'bar-gradient')
      .attr('x1', '0%')
      .attr('y1', '100%')
      .attr('x2', '0%')
      .attr('y2', '0%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#40E0D0');

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#20B2AA');

    // Create flag patterns
    data.forEach((d, i) => {
      const pattern = defs
        .append('pattern')
        .attr('id', `flag-pattern-${i}`)
        .attr('width', width * 0.03)
        .attr('height', height * 0.04)
        .attr('patternUnits', 'userSpaceOnUse');

      d.colors.forEach((color, colorIndex) => {
        const stripeWidth = (width * 0.03) / d.colors.length;
        pattern
          .append('rect')
          .attr('x', colorIndex * stripeWidth)
          .attr('y', 0)
          .attr('width', stripeWidth)
          .attr('height', height * 0.04)
          .attr('fill', color);
      });
    });

    // Create scales
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.country))
      .range([0, width - 40])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height + 30, 0]);

    // // Add y-axis
    // svg.append('g')
    //   .call(d3.axisLeft(y).ticks(5).tickFormat(d => `${d}GB`))
    //   .selectAll('text')
    //   .style('fill', '#333333')
    //   .style('font-size', `${Math.max(8, Math.min(12, width * 0.012))}px`);

    // // Add x-axis
    // svg.append('g')
    //   .attr('transform', `translate(0,${height})`)
    //   .call(d3.axisBottom(x))
    //   .selectAll('text')
    //   .style('fill', '#333333')
    //   .style('font-size', `${Math.max(8, Math.min(12, width * 0.012))}px`)
    //   .attr('transform', 'translate(-10,10)rotate(-45)')
    //   .style('text-anchor', 'end')
    //   .style('opacity', '0')

    // svg.selectAll('.domain, .tick line')
    //   .style('stroke', '#666666')
    //   .style('opacity', '0');

    // Add bars
    svg
      .selectAll('rect.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.country))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
      .attr('fill', 'url(#bar-gradient)');

    // Add flag rectangles with responsive sizing
    const flagWidth = Math.min(30, x.bandwidth() * 0.8);
    svg
      .selectAll('rect.flag')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'flag')
      .attr('x', (d) => x(d.country) + (x.bandwidth() - flagWidth) / 2)
      .attr('width', flagWidth)
      .attr('y', (d) => y(d.value) + (height - y(d.value)) / 2 - flagWidth / 2)
      .attr('height', flagWidth * 0.6)
      .attr('fill', (d, i) => `url(#flag-pattern-${i})`);

    // Add value labels
    svg
      .selectAll('.value-label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('x', (d) => x(d.country) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.value) - height * 0.02)
      .attr('text-anchor', 'middle')
      .text((d) => `${d.value}GB`)
      .style('fill', '#333333')
      .style('font-size', `${Math.max(8, Math.min(12, width * 0.012))}px`);

    // Add country numbers
    svg
      .selectAll('.country-number')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'country-number')
      .attr('x', (d) => x(d.country) + x.bandwidth() / 2)
      .attr('y', height + height * 0.12)
      .attr('text-anchor', 'middle')
      .text((d, i) => d.country)
      .style('fill', '#333333')
      .style('font-size', `14px`)
      .style('font-weight', '600');
  }, [dimensions]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {/* <Dialog /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          top: '40px',
          color: 'rgb(100, 116, 139)'
        }}
      >
        <CardDescription>Which Country Streaming The Most</CardDescription>
        <Dialog />
      </div>
      <svg
        ref={svgRef}
        className="h-full w-full"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'visible'
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: ' 10px',
          justifyContent: 'center',
          color: 'rgb(100, 116, 139)'
        }}
      >
        <CardDescription>Country</CardDescription>
        <div
          style={{
            width: '150px',
            height: '8px',
            backgroundColor: '#28bfb5',
            borderRadius: '4px',
            marginTop: '8px'
          }}
        ></div>
      </div>
      <style>{`
        .bar {
          transition: opacity 0.2s;
        }
        .bar:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default BarChart;
