"use client";

import React from "react";
import IOTImg from "@/assests/portfolio/IOT EV Charging Platform.jpeg";

const IOTEVChargingPage = () => {
  return (
    <div>
      <div className="relative p-10">
        <div className="absolute top-0 left-0 w-full h-[590px] bg-sky-900 z-0"></div>
        <div className="relative max-w-6xl mx-auto space-y-12 z-10">
          <div className="bg-white  shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={IOTImg.src}
                alt="IOT EV Charging Platform Screenshot"
                className="w-full h-auto  shadow-md"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">IOT EV Charging Platform</h1>
              <p className="text-gray-700 text-lg mb-8">
                The ECOM Platform is a cloud-based solution designed to manage and
                monitor Electric Vehicle (EV) chargers for both individual owners
                and organizations.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">Project</h2>
                  <p className="text-gray-700 text-lg">
                    - IOT EV Charging Platform</p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-2">Platform</h2>
                  <p className="text-gray-700 text-lg">- ChargePoint</p>
                </div>
              </div>

              <h2 className="text-3xl font-semibold mb-2">Technologies</h2>
              <p className="text-gray-700 text-lg"> - OCPP, MQTT, REST APIs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-6">
        <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 z-0"></div>

        <div className="relative bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Brief</h2>
            <p className="text-gray-700 text-lg text-justify">
              An IoT EV Charging Platform is a digitally connected solution that links
              electric vehicles, smart charging stations, and the energy grid.
              <br /><br />
              An IoT (Internet of Things) EV Charging Platform is a comprehensive system designed to integrate electric vehicle (EV) chargers, EVs, energy grids, and cloud-based software to enable smart, connected, and efficient charging infrastructure. With the rise of electric vehicles, managing large numbers of chargers efficiently and optimizing energy usage has become critical.
              <br/><br/>
              IoT technology provides real-time monitoring, control, and automation to meet these demands.
              <br /><br />
               An IoT EV Charging Platform is a digitally connected solution that links
              electric vehicles, smart charging stations, and the energy grid.
              <br /><br />
              An IoT (Internet of Things) EV Charging Platform is a comprehensive system designed to integrate electric vehicle (EV) chargers, EVs, energy grids, and cloud-based software to enable smart, connected, and efficient charging infrastructure. With the rise of electric vehicles, managing large numbers of chargers efficiently and optimizing energy usage has become critical.
              <br/><br/>
              IoT technology provides real-time monitoring, control, and automation to meet these demands.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Solution</h2>
            <p className="text-gray-700 text-lg text-justify">
              A solution for an IoT-based EV Charging Platform involves creating a
              centralized smart network where IoT-enabled charging stations.
              <br /><br />
              An IoT-based Electric Vehicle (EV) Charging Platform is a comprehensive solution designed to create a smart, connected, and efficient charging ecosystem that integrates EV chargers, vehicles, energy grids, and cloud-based software. 
                  <br /><br />
              At its core, the platform connects chargers through IoT-enabled sensors and communication modules, such as Wi-Fi, 4G/5G, NB-IoT, or LoRaWAN, allowing real-time monitoring of voltage, current, temperature, and energy consumption. 
                  <br /><br />
              Using standard protocols like OCPP and MQTT, the chargers communicate with a cloud-based Charging Management System (CMS) that handles device management, user authentication, billing, scheduling, and analytics. The platform is complemented by mobile and web applications, enabling users to locate charging stations, reserve slots, monitor charging status, and make payments seamlessly. 
                  <br /><br />
              Advanced features include smart charging, which optimizes energy usage based on grid load and dynamic electricity pricing, predictive maintenance using AI-driven analytics, vehicle-to-grid (V2G) integration to feed energy back to the grid, and secure blockchain-based energy transactions. Security is ensured through end-to-end encryption, authentication mechanisms, and OTA firmware updates for chargers. 
                  <br /><br />
              By combining hardware, connectivity, cloud computing, software, and emerging technologies, this IoT EV Charging Platform offers a scalable and user-friendly solution that enhances operational efficiency, reduces energy costs, supports renewable energy integration, and delivers a superior experience for EV drivers, while enabling utilities and operators to manage resources intelligently and sustainably.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-1">
        <div className="text-left mt-7">
          <h2 className="text-4xl font-bold mb-6">UI/UX (Design)</h2>
          <p className="text-gray-700 text-lg text-justify">
          The goal of the UI/UX design is to provide a seamless, intuitive, and user-friendly experience for both EV drivers and charging station operators. It should simplify charger discovery, booking, monitoring, payments, and analytics while presenting complex IoT data in a clear and actionable way.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 text-lg">
  <li>
    <span className="font-bold">Onboarding:</span> The onboarding process is a critical first impression for users and should be designed to be fast, intuitive, and frictionless. It includes simple account creation through email, phone number, or social login, combined with secure authentication methods like OTP verification or biometric login. 
  </li>
  <li>
    <span className="font-bold">Real-time Feedback:</span> Real-time feedback is essential to build trust and ensure a seamless experience, especially in a system that relies on IoT connectivity. Users should receive instant notifications for key events, 
  </li>
  <li>
    <span className="font-bold">Gamification & Incentives:</span> Real-time feedback is essential to build trust and ensure a seamless experience, especially in a system that relies on IoT connectivity. Users should receive instant notifications for key events, such as charger availability, charging session start, progress updates, completion, or errors like connectivity fai
  </li>
   <li>
    <span className="font-bold">Personalization:</span> Real-time feedback is essential to build trust and ensure a seamless experience, especially in a system that relies on IoT connectivity. Users should receive instant notifications for key events, such as charger availability, charging session start, progress updates, completion, or errors like connectivity f
  </li>
   <li>
    <span className="font-bold">Offline Support:</span> Real-time feedback is esscompletion, or errors like connectivity failures or device faults. These notifications can be delivered via push messages, in-app alerts, or emails, and should be clear, concise, and actionable. 
  </li>
  
  
</ul>

        </div>

        <div className="text-left mt-12">
          <h2 className="text-4xl font-bold mb-6">Illustration</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 1"
              className="w-full h-80 object-cover shadow-md"
            />
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 2"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-sky-900 py-10 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Need a VR solution like Artistry Space?
          </h1>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Book a strategy call
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            <div className="text-gray-700 text-lg leading-relaxed ">
              Developing an IoT-based Electric Vehicle (EV) Charging Platform involves creating a fully integrated ecosystem that combines smart hardware, cloud infrastructure, connectivity, and user-facing applications to deliver efficient, reliable, and scalable charging solutions. The development process begins with a thorough requirements analysis, identifying the needs of EV drivers, fleet operators, and utilities while ensuring compliance with safety, cybersecurity, and regulatory standards. laudantium sit earum tempora beatae ullam voluptate! Suscipit obcaecati iusto laborum?
              <br /><br />
              On the hardware side, chargers are equipped with sensors to monitor voltage, current, temperature, and energy consumption, along with connectivity modules such as Wi-Fi, 4G/5G, NB-IoT, or LoRaWAN to enable real-time communication with the cloud.
              <br /><br />
              he platform firmware ensures chargers can process sensor data, manage charging sessions, and support remote control and over-the-air updates. The backend is built on cloud services that handle device management, charging management systems (CMS), user authentication, payment processing, scheduling, and analytics, often leveraging AI and machine learning to optimize charging, predict maintenance needs, and balance load on the energy grid
              <br /><br />
              Communication protocols such as OCPP, MQTT, REST APIs, and WebSocket ensure seamless interaction between chargers, mobile apps, and cloud servers
            </div>

            {/* Image */}
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot"
              className="w-full h-96 object-cover shadow-lg mt-10"
              
            />

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 p-10  -mt-11">
        <div className="text-center mt-12">
          <h4 className="text-2xl font-bold mb-5">PLATFORM SCREENS</h4>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 1"
              className="w-full h-80 object-cover shadow-md"
            />
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 2"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto space-y-12 p-10  -mt-11">
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 1"
              className="w-full h-80 object-cover shadow-md"
            />
            <img
              src={IOTImg.src}
              alt="IOT EV Charging Platform Screenshot 2"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>
        </div>

      </div>


      <div className="max-w-6xl mx-auto text-center space-y-6 px-6 mb-15">
        <button className="bg-white text-sky-900 border-2 border-sky-900 px-7 py-3 rounded-full font-semibold hover:bg-sky-500 hover:text-white transition-colors duration-300">
          All Projects
        </button>

      </div>
    </div>
  );
};

export default IOTEVChargingPage;
