// ProductPage2.js
import React from "react";
import styled, { keyframes } from "styled-components";

const Rp1 = () => {
  return (
    <ProductSection>
      <div className="container">
        <h1 className="main-title fadeIn">
          Recommended Practices for Clean Rooms
        </h1>

        {/* INTRODUCTION */}
        <div className="section fadeIn">
          <h2>Introduction</h2>
          <p>
            Cleanrooms are controlled environments designed to limit particulate
            and microbial contamination to protect both products and personnel.
            Maintaining cleanliness levels requires strict adherence to
            established practices and international standards such as ISO 14644,
            EU GMP, and Federal Standard 209E. The following guidelines outline
            essential procedures and classification systems for cleanroom
            operations.
          </p>
        </div>

        {/* PROCEDURES */}
        <div className="section fadeIn">
          <h2>Procedures to Maintain Cleanroom Cleanliness</h2>

          {/* Entry and Exit Protocols */}
          <div className="sub-section">
            <h3>Entry and Exit Protocols</h3>
            <ul>
              <li>
                Use airlocks, pass boxes, or air showers to minimize
                contamination during personnel and material movement.
              </li>
              <li>
                Follow strict gowning procedures, wearing approved garments
                specific to the cleanroom class.
              </li>
              <li>
                Limit personnel entry only to authorized and trained
                individuals.
              </li>
            </ul>
          </div>

          {/* Garment and Personal Hygiene */}
          <div className="sub-section">
            <h3>Garment and Personal Hygiene</h3>
            <ul>
              <li>
                Wear sterile garments, gloves, masks, and head covers
                appropriate to the cleanroom class.
              </li>
              <li>
                Replace garments at defined intervals or when visibly
                compromised.
              </li>
              <li>
                Maintain high standards of personal hygiene before entering
                clean areas.
              </li>
            </ul>
          </div>

          {/* Cleaning and Disinfection */}
          <div className="sub-section">
            <h3>Cleaning and Disinfection</h3>
            <ul>
              <li>
                Perform scheduled cleaning with approved agents and sterile
                wipes or mops.
              </li>
              <li>
                Clean surfaces in a unidirectional manner, from cleanest to less
                clean zones.
              </li>
              <li>
                Validate and document disinfectant effectiveness regularly.
              </li>
            </ul>
          </div>

          {/* Material Handling */}
          <div className="sub-section">
            <h3>Material Handling</h3>
            <ul>
              <li>
                Transfer materials through pass boxes or airlocks to prevent
                cross-contamination.
              </li>
              <li>
                Use pre-cleaned, sterilized containers and tools.
              </li>
              <li>Prohibit unnecessary materials inside the cleanroom.</li>
            </ul>
          </div>

          {/* Environmental Monitoring */}
          <div className="sub-section">
            <h3>Environmental Monitoring</h3>
            <ul>
              <li>
                Conduct particle count and microbial monitoring as per
                classification requirements.
              </li>
              <li>
                Track pressure differentials, air velocity, and
                temperature/humidity levels.
              </li>
              <li>
                Document results and investigate deviations immediately.
              </li>
            </ul>
          </div>

          {/* Operational Practices */}
          <div className="sub-section">
            <h3>Operational Practices</h3>
            <ul>
              <li>
                Minimize movement and talking inside clean areas to reduce
                particle generation.
              </li>
              <li>Avoid rapid motions that disturb laminar airflow.</li>
              <li>Follow validated SOPs for all processes and equipment use.</li>
            </ul>
          </div>
        </div>

        {/* CGMP REQUIREMENT */}
               {/* CGMP REQUIREMENT */}
        <div className="section fadeIn">
          <h2>CGMP Requirement</h2>
          <p>
            Selection of airborne particulate cleanliness classes for clean
            rooms and zones.
          </p>
          <p>
            Air Classification - Maximum Concentration limits ( Particle/m³) for
            particles equal to and larger than the considered sizes
          </p>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>0.5µm (Static)</th>
                <th>5µm (Static)</th>
                <th>0.5µm (Dynamic)</th>
                <th>5µm (Dynamic)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class A</td>
                <td>3500</td>
                <td>0</td>
                <td>3500</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Class B</td>
                <td>3500</td>
                <td>0</td>
                <td>35000</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Class C</td>
                <td>350000</td>
                <td>2000</td>
                <td>3500000</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>Class D</td>
                <td>350000</td>
                <td>20000</td>
                <td>Not Defined</td>
                <td>Not Defined</td>
              </tr>
            </tbody>
          </table>

          

          {/* Additional Notes */}
          <div className="sub-section">
            <h3>Additional Requirements (EU GMP Standards)</h3>
            <ul>
              <li>
                The average of particle concentrations measured at each location
                should not exceed the limits mentioned in the above table.
              </li>
              <li>Temperature should be maintained within 22±2 °C.</li>
              <li>Relative Humidity (RH) should be maintained within 50±5%.</li>
              <li>
                Air flow pattern shall be mixed flow in Class D and
                Uni-directional flow in Class A, B & C.
              </li>
              <li>
                Should meet the required air changes as detailed in Annexure.
              </li>
            </ul>
          </div>
        </div>

                {/* FEDERAL STANDARD 209E REQUIREMENT */}
        <div className="section fadeIn">
          <h2>Federal Standard 209E Class Limits</h2>
          <p>
            Federal Standard 209E defines airborne particulate cleanliness
            classes based on particle counts at various size ranges, measured in
            SI (m³) and English (ft³) volume units.
          </p>

          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>≥0.1µm</th>
                <th>≥0.2µm</th>
                <th>≥0.3µm</th>
                <th>≥0.5µm</th>
                <th>≥5µm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M1</td>
                <td>350 / 9.91</td>
                <td>75.7 / 2.14</td>
                <td>30.9 / 0.875</td>
                <td>10.0 / 0.283</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M1.5</td>
                <td>1240 / 35.0</td>
                <td>265 / 7.50</td>
                <td>106 / 3.00</td>
                <td>35.3 / 1.00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M2</td>
                <td>3500 / 99.1</td>
                <td>757 / 21.4</td>
                <td>309 / 8.75</td>
                <td>100 / 2.83</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M2.5</td>
                <td>12400 / 350</td>
                <td>2650 / 75.0</td>
                <td>1060 / 30.0</td>
                <td>353 / 10.0</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M3</td>
                <td>35000 / 991</td>
                <td>7570 / 214</td>
                <td>3090 / 87.5</td>
                <td>1000 / 28.3</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M3.5</td>
                <td>-</td>
                <td>26500 / 750</td>
                <td>10600 / 300</td>
                <td>3530 / 100</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M4</td>
                <td>-</td>
                <td>75700 / 2140</td>
                <td>30900 / 875</td>
                <td>10000 / 283</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M4.5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>35300 / 1000</td>
                <td>247 / 7.00</td>
              </tr>
              <tr>
                <td>M5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>100000 / 2830</td>
                <td>618 / 17.5</td>
              </tr>
              <tr>
                <td>M5.5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>353000 / 10000</td>
                <td>2470 / 70.0</td>
              </tr>
              <tr>
                <td>M6</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1000000 / 28300</td>
                <td>6180 / 175</td>
              </tr>
              <tr>
                <td>M6.5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3350000 / 100000</td>
                <td>24700 / 700</td>
              </tr>
              <tr>
                <td>M7</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>10000000 / 283000</td>
                <td>61800 / 1750</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ISO 14644-1 CLEANROOM CLASSIFICATION */}
        <div className="section fadeIn">
          <h2>ISO 14644-1 Cleanroom Classification</h2>
          <p>
            Selection of airborne particulate cleanliness classes for cleanrooms and clean zones.
          </p>
          <p>
            ISO Classification Number – Maximum concentration limits (particles/m³ of air) for particles equal to and larger than the considered sizes shown below:
          </p>
          <table>
            <thead>
              <tr>
                <th>ISO Class</th>
                <th>≥0.1µm</th>
                <th>≥0.2µm</th>
                <th>≥0.3µm</th>
                <th>≥0.5µm</th>
                <th>≥1µm</th>
                <th>≥5.0µm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ISO Class 1</td>
                <td>10</td>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ISO Class 2</td>
                <td>100</td>
                <td>24</td>
                <td>10</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ISO Class 3</td>
                <td>1000</td>
                <td>237</td>
                <td>102</td>
                <td>35</td>
                <td>8</td>
                <td></td>
              </tr>
              <tr>
                <td>ISO Class 4</td>
                <td>10000</td>
                <td>2370</td>
                <td>1020</td>
                <td>352</td>
                <td>83</td>
                <td></td>
              </tr>
              <tr>
                <td>ISO Class 5</td>
                <td>100000</td>
                <td>23700</td>
                <td>10200</td>
                <td>3520</td>
                <td>832</td>
                <td>29</td>
              </tr>
              <tr>
                <td>ISO Class 6</td>
                <td>1000000</td>
                <td>237000</td>
                <td>102000</td>
                <td>35200</td>
                <td>8320</td>
                <td>293</td>
              </tr>
              <tr>
                <td>ISO Class 7</td>
                <td></td>
                <td></td>
                <td></td>
                <td>352000</td>
                <td>83200</td>
                <td>2930</td>
              </tr>
              <tr>
                <td>ISO Class 8</td>
                <td></td>
                <td></td>
                <td></td>
                <td>3520000</td>
                <td>832000</td>
                <td>29300</td>
              </tr>
              <tr>
                <td>ISO Class 9</td>
                <td></td>
                <td></td>
                <td></td>
                <td>35200000</td>
                <td>8320000</td>
                <td>293000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MEANINGS OF CLEANROOM CLASSIFICATIONS */}
        <div className="section fadeIn">
          <h2>Meanings of the Cleanroom Classifications</h2>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Meaning / Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class 1</td>
                <td>
                  Mainly used within the microelectronic industry when
                  manufacturing integrated circuits requiring submicron
                  resolution.
                </td>
              </tr>
              <tr>
                <td>Class 10</td>
                <td>
                  Used within the semiconductor industry for band widths below
                  2 micrometers.
                </td>
              </tr>
              <tr>
                <td>Class 100</td>
                <td>
                  Considered one of the most useful critical cleanliness
                  classes. Commonly (but incorrectly) called sterile rooms. Used
                  for aseptic pharmaceutical manufacturing, integrated circuits,
                  and patient isolation after treatments such as bone marrow
                  transplantation.
                </td>
              </tr>
              <tr>
                <td>Class 1000</td>
                <td>
                  Used for producing high-quality optics, mounting and testing
                  gyroscopes for aircrafts, and assembling high-quality
                  miniature bearings.
                </td>
              </tr>
              <tr>
                <td>Class 10000</td>
                <td>
                  Applied in mounting procedures for hydraulic and pneumatic
                  equipment, food and beverage industry, and pharmaceutical
                  industry.
                </td>
              </tr>
              <tr>
                <td>Class 100000</td>
                <td>
                  Used across industries such as optical products,
                  large electronic systems assembly, hydraulic/pneumatic systems,
                  food and beverage industry, and pharmaceutical industry.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

               {/* SCOPE OF CLEANROOM STANDARDS */}
        <div className="section fadeIn">
          <h2>Scope of Various Cleanroom Standards</h2>

          <p>
            <strong>ISO 14644-1 – Classification of air cleanliness:</strong> 
            This standard covers the classification of air cleanliness in cleanrooms and associated controlled environments. This classification is in accordance with the standard as specified and is only concerned with the concentration of airborne particles. It must be stressed that this standard cannot be used to characterize the physical, chemical, radiological, or viable nature of airborne particle.
          </p>

          <p>
            <strong>ISO 14644-2 – Specification for testing and monitoring to prove continued compliance:</strong> 
            This part of the overall standard specifies requirements for periodic testing of cleanrooms and associated controlled environments to prove their continued compliance with ISO14644-1, and for the designated class of environmental cleanliness.
          </p>

          <p>
            <strong>ISO 14644-3 – Metrology and test methods:</strong> 
            This standard specifies the various methods and techniques which can be used to characterize and monitor various parameters in cleanrooms and other controlled environments.
          </p>

          <p>
            <strong>ISO 14644-4 – Design, Construction, and Start-up:</strong> 
            <strong>ISO 14644-5 – Cleanroom operations:</strong> 
           This international standard specifies the basic requirements for operating cleanrooms and other controlled environments. It is primarily intended for those who are planning to carry out work in a cleanroom or any other controlled environment.
          </p>

          

          <p>
            <strong>ISO 14698-1 – General principles:</strong> 
            This standard describes the principles and basic methodology for a formal system to assess and control bio-contamination where cleanroom technology is applied. The standard is used in order to allow reproducible monitoring of bio-contamination and also to allow selection of appropriate protective measures.
          </p>

          <p>
            <strong>ISO 14698-2 – Evaluation and interpretation of bio-contamination data:</strong> 
            This part of the standard concerning cleanroom technology and bio-contamination control describes basic principles and methodological requirements for all microbiological data evaluation. The standard also covers the estimation of bio-contamination data obtained from sampling for viable particles in zone at risks, as specification by the selected system.
          </p>

          <p>
            <strong>ISO 14698-3 – Methodology for measuring efficiency:</strong> 
           This standard concerns the efficiency of various processes that incorporated one or more of the following actions: rinsing, cleaning, disinfection, combined cleaning and disinfection by either biochemical or mechanical means. Methods of measuring the efficiency of the processes of rinsing and/ or cleaning and /or disinfection and/or combined cleaning and disinfection of wet soiled surfaces on which microorganisms may be present either with or without the formation of a bio-film, is explained in relation to the application of cleanroom technology.
          </p>
        </div>

                {/* AIR VELOCITIES & AIR CHANGES */}
        <div className="section fadeIn">
          <h2>Air Velocities & Air Changes in Cleanrooms</h2>

          <table>
            <thead>
              <tr>
                <th>Class of Cleanroom</th>
                <th>Airflow Type</th>
                <th>Average Velocity (ft/min)</th>
                <th>Air Changes / hr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ISO 8 (100,000)</td>
                <td>N/M</td>
                <td>1–8</td>
                <td>5–48</td>
              </tr>
              <tr>
                <td>ISO 7 (10,000)</td>
                <td>N/M</td>
                <td>10–15</td>
                <td>60–90</td>
              </tr>
              <tr>
                <td>ISO 6 (1,000)</td>
                <td>N/M</td>
                <td>25–40</td>
                <td>150–240</td>
              </tr>
              <tr>
                <td>ISO 5 (100)</td>
                <td>U/N/M</td>
                <td>40–80</td>
                <td>240–480</td>
              </tr>
              <tr>
                <td>ISO 4 (10)</td>
                <td>U</td>
                <td>50–90</td>
                <td>300–540</td>
              </tr>
              <tr>
                <td>ISO 3 (1)</td>
                <td>U</td>
                <td>60–90</td>
                <td>360–540</td>
              </tr>
              <tr>
                <td>Better Than ISO 3</td>
                <td>U</td>
                <td>60–100</td>
                <td>360–600</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}>
            <strong>Formula:</strong> <br />
            Air Changes per hour = (Average airflow velocity × Room area × 60) ÷ Room volume
          </p>

          <p>
            <strong>Note:</strong> N = Non-unidirectional, M = Mixed flow, U = Unidirectional flow.
          </p>
        </div>

        {/* FILTER CLASSIFICATION - EN 1822 */}
        <div className="section fadeIn">
          <h2>Classification of Filters According to EN 1822</h2>

          <table>
            <thead>
              <tr>
                <th>Filter Class</th>
                <th>Overall Value Efficiency (%)</th>
                <th>Overall Value Penetration (%)</th>
                <th>Leak Test Efficiency (%)</th>
                <th>Leak Test Penetration (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H 10</td>
                <td>85</td>
                <td>15</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>H 11</td>
                <td>95</td>
                <td>5</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>H 12</td>
                <td>99.5</td>
                <td>0.5</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>H 13</td>
                <td>99.95</td>
                <td>0.05</td>
                <td>99.75</td>
                <td>0.25</td>
              </tr>
              <tr>
                <td>H 14</td>
                <td>99.995</td>
                <td>0.005</td>
                <td>99.975</td>
                <td>0.025</td>
              </tr>
              <tr>
                <td>U 15</td>
                <td>99.9995</td>
                <td>0.0005</td>
                <td>99.9975</td>
                <td>0.0025</td>
              </tr>
              <tr>
                <td>U 16</td>
                <td>99.99995</td>
                <td>0.00005</td>
                <td>99.99975</td>
                <td>0.00025</td>
              </tr>
              <tr>
                <td>U 17</td>
                <td>99.999995</td>
                <td>0.000005</td>
                <td>99.9999</td>
                <td>0.0001</td>
              </tr>
            </tbody>
          </table>
        </div>


                {/* SCHEDULE OF TESTS - CONTINUING COMPLIANCE */}
        <div className="section fadeIn">
          <h2>Schedule of Tests to Demonstrate Continuing Compliance</h2>

          <table>
            <thead>
              <tr>
                <th>Test Parameter</th>
                <th>Class</th>
                <th>Maximum Time Interval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>To Demonstrate Compliance by Particle Counting</td>
                <td>≤ ISO 5</td>
                <td>6 months</td>
              </tr>
              <tr>
                <td>To Demonstrate Compliance by Particle Counting</td>
                <td>&gt; ISO 5</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>Schedule of Additional</td>
                <td>All Classes</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>Air Flow Velocity or Volume</td>
                <td>All Classes</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>Air Pressure Difference</td>
                <td>All Classes</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>Schedule of Optional Tests</td>
                <td>All Classes</td>
                <td>24* months</td>
              </tr>
              <tr>
                <td>Installed Filter Leakage</td>
                <td>All Classes</td>
                <td>24* months</td>
              </tr>
              <tr>
                <td>Airflow Visualisation</td>
                <td>All Classes</td>
                <td>24* months</td>
              </tr>
              <tr>
                <td>Recovery</td>
                <td>All Classes</td>
                <td>24* months</td>
              </tr>
              <tr>
                <td>Containment Leakage</td>
                <td>All Classes</td>
                <td>24* months</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "15px" }}>
            <strong>*</strong> = Suggested time interval
          </p>
        </div>

               {/* SOURCES, ROUTE OF TRANSFER, CONTROL & MONITORING METHODS */}
        <div className="section fadeIn">
          <h2>Sources, Route of Transfer and Control & Monitoring Methods Used in Cleanrooms</h2>

          <table>
            <thead>
              <tr>
                <th>Hazard</th>
                <th>Route</th>
                <th>Control Methods</th>
                <th>Monitoring Methods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supply air</td>
                <td>Airborne</td>
                <td>Air filters</td>
                <td>Filter integrity test</td>
              </tr>
              <tr>
                <td>Areas adjacent to the cleanroom</td>
                <td>Airborne, Contact</td>
                <td>Overpressure; air movement control; Cleanroom mats</td>
                <td>Room pressure differential; Mat inspection</td>
              </tr>
              <tr>
                <td>Various airborne dispersions</td>
                <td>Airborne</td>
                <td>Ventilation; Control of airflow</td>
                <td>Air supply rate or velocity; Counts of airborne particles; Counts of airborne micro-organisms</td>
              </tr>
              <tr>
                <td>Floors, Walls and other Surfaces</td>
                <td>Contact</td>
                <td>Cleaning (and, where required, disinfection)</td>
                <td>Surface counting of particles and micro-organisms</td>
              </tr>
              <tr>
                <td>People</td>
                <td>Airborne, Contact</td>
                <td>Cleanroom garments; Gloves</td>
                <td>Surface counts; Inspection for tears; Particle penetration testing; Inspection for punctures; Surface contamination counts</td>
              </tr>
              <tr>
                <td>Machines</td>
                <td>Airborne, Contact</td>
                <td>Ventilation; Design of machine; Cleaning or disinfection</td>
                <td>Air extract rates and airflow patterns; Surface contamination</td>
              </tr>
              <tr>
                <td>Raw materials</td>
                <td>Mainly Contact</td>
                <td>Control of manufacturing of raw materials; Cleaning if solids, or filtration if fluids; Sterilisation</td>
                <td>Particle and bacterial counts within or on the materials; Filtration systems; Sterilisation system</td>
              </tr>
              <tr>
                <td>Containers and packaging</td>
                <td>Mainly Contact</td>
                <td>Control of their composition and manufacturing environment; Sterilisation</td>
                <td>Particles and microbial counts on surface; Sterilisation systems</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "15px" }}>
            <strong>Legend:</strong> R = Recommended,&nbsp; NR = Not Recommended,&nbsp; AS = Application Specific,&nbsp; NR* = Not recommended in non-directional flow
          </p>
        </div>


                {/* GARMENT SYSTEMS ACCORDING TO IEST-RP-CC-003.2 */}
        <div className="section fadeIn">
          <h2>Garment Systems for Different Classes of Cleanrooms (IEST-RP-CC-003.2)</h2>

          <table>
            <thead>
              <tr>
                <th>Apparel Type</th>
                <th>ISO 7 & 8 (100K & 10K)</th>
                <th>ISO 6 (1,000)</th>
                <th>ISO 5 (100)</th>
                <th>ISO 4 & 3 (10 & 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frock</td>
                <td>R</td>
                <td>AS</td>
                <td>AS (NR*)</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>2 piece suit</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
              </tr>
              <tr>
                <td>Coverall</td>
                <td>AS</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Shoe Cover</td>
                <td>R</td>
                <td>AS</td>
                <td>AS (NR*)</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>Boot</td>
                <td>AS</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Special Footwear</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
              </tr>
              <tr>
                <td>Hair Cover</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Hood</td>
                <td>AS</td>
                <td>AS</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Facial Cover</td>
                <td>AS</td>
                <td>AS</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Powered Headgear</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
              </tr>
              <tr>
                <td>Woven Gloves</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>Barrier Gloves</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Inner Suit</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
                <td>R</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "15px" }}>
            <strong>Legend:</strong> R = Recommended,&nbsp; NR = Not Recommended,&nbsp; AS = Application Specific,&nbsp; NR* = Not recommended in non-directional flow
          </p>
        </div>


        {/* GARMENT SYSTEMS FOR ASEPTIC CLEANROOMS (IEST RP CC-003.2) */}
        <div className="section fadeIn">
          <h2>Garment Systems for Aseptic Cleanrooms (IEST RP CC-003.2)</h2>

          <table>
            <thead>
              <tr>
                <th>Apparel Type</th>
                <th>ISO Class 7 (10,000)</th>
                <th>ISO Class 6 & 5 (1,000 & 100)</th>
                <th>ISO Class 4 & 3 (10 & 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frock</td>
                <td>NR</td>
                <td>NR</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>2 piece suit</td>
                <td>NR</td>
                <td>NR</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>Coverall</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Shoe Cover</td>
                <td>NR</td>
                <td>NR</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>Boot</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Special Footwear</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
              </tr>
              <tr>
                <td>Hair Cover (bouffant)</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Hood</td>
                <td>AS</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Facial Cover</td>
                <td>R**</td>
                <td>R**</td>
                <td>R**</td>
              </tr>
              <tr>
                <td>Powered Headgear</td>
                <td>AS</td>
                <td>AS</td>
                <td>AS</td>
              </tr>
              <tr>
                <td>Woven Gloves</td>
                <td>NR</td>
                <td>NR</td>
                <td>NR</td>
              </tr>
              <tr>
                <td>Barrier Gloves</td>
                <td>R</td>
                <td>R</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Inner Suit</td>
                <td>AS</td>
                <td>AS</td>
                <td>R</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "15px" }}>
            <strong>Legend:</strong> R = Recommended, NR = Not Recommended, AS = Application Specific, R** = Surgical Mask Recommended
          </p>
        </div>

        {/* RECOMMENDED FREQUENCY OF GARMENT CHANGE (IEST RP-CC-003) */}
        <div className="section fadeIn">
          <h2>Recommended Frequency of Garment Change (IEST RP-CC-003)</h2>

          <table>
            <thead>
              <tr>
                <th>Class of Room</th>
                <th>ISO 7 & 8 (Class 1000 & 100,000)</th>
                <th>ISO 6 (Class 1000)</th>
                <th>ISO 5 (Class 100)</th>
                <th>ISO 4 (Class 10)</th>
                <th>ISO 3 (Class 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frequency of Change</td>
                <td>2 per week</td>
                <td>2 to 3 per week</td>
                <td>Daily</td>
                <td>Per entry to 2 per day</td>
                <td>On each entry</td>
              </tr>
            </tbody>
          </table>
        </div>




       
      </div>
    </ProductSection>
  );
};

export default Rp1;

const fadeInUpAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const ProductSection = styled.section`
  .fadeIn {
    opacity: 0;
    animation: ${fadeInUpAnim} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  .main-title.fadeIn {
    animation-delay: 0.1s;
  }
  
  .section.fadeIn:nth-of-type(1) { animation-delay: 0.15s; }
  .section.fadeIn:nth-of-type(2) { animation-delay: 0.20s; }
  .section.fadeIn:nth-of-type(3) { animation-delay: 0.25s; }
  .section.fadeIn:nth-of-type(4) { animation-delay: 0.30s; }
  .section.fadeIn:nth-of-type(5) { animation-delay: 0.35s; }
  .section.fadeIn:nth-of-type(6) { animation-delay: 0.40s; }
  .section.fadeIn:nth-of-type(7) { animation-delay: 0.45s; }
  .section.fadeIn:nth-of-type(8) { animation-delay: 0.50s; }
  .section.fadeIn:nth-of-type(9) { animation-delay: 0.55s; }
  .section.fadeIn:nth-of-type(10) { animation-delay: 0.60s; }
  .section.fadeIn:nth-of-type(11) { animation-delay: 0.65s; }
  .section.fadeIn:nth-of-type(12) { animation-delay: 0.70s; }
  .section.fadeIn:nth-of-type(13) { animation-delay: 0.75s; }
  .section.fadeIn:nth-of-type(14) { animation-delay: 0.80s; }
  .section.fadeIn:nth-of-type(15) { animation-delay: 0.85s; }
  padding: 80px 0;
  text-align: center;

  .main-title {
    font-size: 42px;
    margin-bottom: 40px;
    font-weight: bold;
    color: #0061a6;
  }

  .section {
    margin-bottom: 60px;
    // background: #f9f9f9;
    padding: 30px;
    border-radius: 16px;
    // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: left;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
    color: #0062a6;
    text-align: center;
  }

  h3 {
    font-size: 20px;
    margin: 20px 0 10px;
    color: #004a80;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textColor || "#333"};
    text-align: justify;
  }

  ul {
    list-style: disc;
    margin: 10px 0 20px 20px;

    li {
      margin-bottom: 10px;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.textColor || "#444"};
    }
  }

 /* Global table styles for responsiveness */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;          /* smaller text for compactness */
}

table th, table td {
  border: 1px solid #ddd;
  padding: 6px 8px;         /* reduce padding for mobile */
  text-align: left;
  vertical-align: top;
  word-break: break-word;   /* prevent overflow */
}

table th {
  background: #105eadff;
  font-weight: 600;
  color:white;
}

.table-container {
  width: 100%;
  overflow-x: auto;         /* enables horizontal scroll if needed */
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
}

@media (max-width: 600px) {
  table {
    font-size: 12px;        /* even smaller text on tiny devices */
  }
  table th, table td {
    padding: 4px 6px;
  }
}


  
  @media screen and (max-width: 768px) {
    .main-title {
      font-size: 32px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;
