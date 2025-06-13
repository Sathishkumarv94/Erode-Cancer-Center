import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './PatientStats.css';

const stats = [
  { count: 26000, label: 'Patients' },
  { count: 23000, label: 'CT & RT Treated' },
  { count: 2500, label: 'Cancer Survivors' },
  { count: 18, label: 'Years of Journey' },
  { count: 4, label: 'Hospital Branches' },
];

const PatientStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  return (
    <section className="plain-stats-section" ref={ref}>
      <div className="plain-stats-wrapper">
        {stats.map((stat, index) => (
          <div key={index} className="plain-stat-item">
            <span className="plain-stat-number">
              {inView ? (
                <CountUp end={stat.count} duration={2} separator="," />
              ) : (
                '0'
              )}
              +
            </span>
            <span className="plain-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientStats;
