import React, { useState } from 'react';
import { Expander, TooltipText } from '../../components';
import { Button } from 'antd';

const Home = () => {
  const [rows, setRows] = useState([
    {
      "id": 1,
      "name": "iPhone 14 Pro Max",
      "price": 1299,
      "description": "The latest flagship smartphone from Apple with a powerful A16 Bionic chip, triple camera system, and Dynamic Island.",
      "category": "Electronics",
      "children": [
        {
          "id": 1.1,
          "name": "128GB, Blue",
          "price": 1299,
          "description": "128GB storage capacity, Blue color",
          "category": "Storage",
          "features": [
            { "feature": "A16 Bionic chip", "benefit": "Faster processing speed" },
            { "feature": "6.1-inch display", "benefit": "Large, vibrant screen" },
            { "feature": "5G capable", "benefit": "Faster network speeds" }
          ]
        },
        {
          "id": 1.2,
          "name": "256GB, Purple",
          "price": 1399,
          "description": "256GB storage capacity, Purple color",
          "category": "Storage",
          "features": [
            { "feature": "A16 Bionic chip", "benefit": "Improved performance" },
            { "feature": "Triple camera system", "benefit": "High-quality photos" }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Sony PlayStation 5",
      "price": 499,
      "description": "Next-generation gaming console with stunning graphics and immersive gameplay.",
      "category": "Gaming",
      "children": [
        {
          "id": 2.1,
          "name": "Disc Edition",
          "price": 499,
          "description": "With Blu-ray Disc drive",
          "category": "Edition",
          "features": [
            { "feature": "4K Gaming", "benefit": "Ultra HD graphics" },
            { "feature": "Ray Tracing", "benefit": "Realistic lighting and shadows" }
          ]
        },
        {
          "id": 2.2,
          "name": "Digital Edition",
          "price": 399,
          "description": "Digital-only version",
          "category": "Edition",
          "features": [
            { "feature": "Digital-only", "benefit": "Less physical storage needed" }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Samsung Galaxy Watch 6",
      "price": 279,
      "description": "Smartwatch with advanced health tracking features and customizable watch faces.",
      "category": "Wearables",
      "children": [
        {
          "id": 3.1,
          "name": "40mm, Black",
          "price": 279,
          "description": "40mm case size, Black color",
          "category": "Size",
          "features": [
            { "feature": "GPS", "benefit": "Accurate location tracking" },
            { "feature": "Heart Rate Monitor", "benefit": "Health monitoring" },
            { "feature": "Water Resistant", "benefit": "Suitable for swimming" }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "MacBook Pro M2",
      "price": 1299,
      "description": "Powerful laptop with the latest M2 chip for high-performance computing.",
      "category": "Computers",
      "children": []
    },
    {
      "id": 5,
      "name": "Sony WH-1000XM5 Headphones",
      "price": 349,
      "description": "Noise-canceling headphones with excellent sound quality and comfortable fit.",
      "category": "Audio",
      "children": [
        {
          "id": 5.1,
          "name": "Black",
          "price": 349,
          "description": "Black color",
          "category": "Color",
          "features": [
            { "feature": "Noise Cancelling", "benefit": "Blocks out external noise" },
            { "feature": "30 Hours Battery Life", "benefit": "Long-lasting power" }
          ]
        },
        {
          "id": 5.2,
          "name": "Silver",
          "price": 349,
          "description": "Silver color",
          "category": "Color",
          "features": []
        }
      ]
    },
    {
      "id": 6,
      "name": "Canon EOS R5",
      "price": 3899,
      "description": "Full-frame mirrorless camera with high-resolution sensor and fast autofocus.",
      "category": "Photography",
      "children": [
        {
          "id": 6.1,
          "name": "Body Only",
          "price": 3899,
          "description": "Camera body without lens",
          "category": "Kit",
          "features": [
            { "feature": "45MP Full-frame Sensor", "benefit": "High-resolution images" }
          ]
        },
        {
          "id": 6.2,
          "name": "Kit with RF 24-70mm f/2.8 L USM Lens",
          "price": 5499,
          "description": "Camera body with RF 24-70mm f/2.8 L USM lens",
          "category": "Kit",
          "features": []
        }
      ]
    },
    {
      "id": 7,
      "name": "Nintendo Switch OLED",
      "price": 349,
      "description": "Hybrid gaming console with a larger OLED screen and enhanced features.",
      "category": "Gaming",
      "children": [
        {
          "id": 7.1,
          "name": "White",
          "price": 349,
          "description": "White color",
          "category": "Color",
          "features": [
            { "feature": "OLED Display", "benefit": "Vibrant screen quality" },
            { "feature": "64GB Storage", "benefit": "Store more games" }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "iPad Pro 12.9-inch",
      "price": 1099,
      "description": "Powerful tablet with a large display and advanced features for productivity and entertainment.",
      "category": "Tablets",
      "children": [
        {
          "id": 8.1,
          "name": "128GB, Space Gray",
          "price": 1099,
          "description": "128GB storage capacity, Space Gray color",
          "category": "Configuration",
          "features": [
            { "feature": "M1 Chip", "benefit": "Fast and efficient" }
          ]
        },
        {
          "id": 8.2,
          "name": "256GB, Silver",
          "price": 1299,
          "description": "256GB storage capacity, Silver color",
          "category": "Configuration",
          "features": []
        }
      ]
    },
    {
      "id": 9,
      "name": "Samsung Galaxy Z Fold 4",
      "price": 1799,
      "description": "Foldable smartphone with a large screen and versatile functionality.",
      "category": "Mobile Phones",
      "children": []
    },
    {
      "id": 10,
      "name": "DJI Mavic Air 2S",
      "price": 999,
      "description": "High-performance drone with a 1-inch sensor and advanced features for aerial photography and videography.",
      "category": "Drones",
      "children": [
        {
          "id": 10.1,
          "name": "Fly More Combo",
          "price": 1299,
          "description": "Includes extra batteries, propellers, and a charging hub",
          "category": "Combo",
          "features": [
            { "feature": "1-inch sensor", "benefit": "Higher image quality" },
            { "feature": "30-minute flight time", "benefit": "Extended flying experience" }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "Dell XPS 13",
      "price": 999,
      "description": "Compact and powerful laptop with a stunning display and high performance.",
      "category": "Computers",
      "children": [
        {
          "id": 11.1,
          "name": "8GB RAM, 256GB SSD",
          "price": 999,
          "description": "Compact model with sufficient storage",
          "category": "Configuration",
          "features": [
            { "feature": "InfinityEdge Display", "benefit": "Maximized screen space" },
            { "feature": "Intel i5 Processor", "benefit": "Efficient multitasking" }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "GoPro HERO10",
      "price": 499,
      "description": "Action camera with high-definition video recording and waterproof capabilities.",
      "category": "Photography",
      "children": []
    },
    {
      "id": 13,
      "name": "Fitbit Charge 5",
      "price": 179,
      "description": "Advanced fitness and health tracker with built-in GPS and stress management tools.",
      "category": "Wearables",
      "children": [
        {
          "id": 13.1,
          "name": "Black/Graphite",
          "price": 179,
          "description": "Black strap with graphite case",
          "category": "Color",
          "features": [
            { "feature": "Heart Rate Monitor", "benefit": "Real-time heart rate tracking" },
            { "feature": "Sleep Tracking", "benefit": "Analyzes sleep patterns" }
          ]
        },
        {
          "id": 13.2,
          "name": "Lunar White/Soft Gold",
          "price": 179,
          "description": "Lunar White strap with soft gold case",
          "category": "Color",
          "features": []
        }
      ]
    },
    {
      "id": 14,
      "name": "Bose QuietComfort Earbuds II",
      "price": 299,
      "description": "True wireless earbuds with world-class noise cancellation and high-fidelity audio.",
      "category": "Audio",
      "children": [
        {
          "id": 14.1,
          "name": "Triple Black",
          "price": 299,
          "description": "Black color",
          "category": "Color",
          "features": [
            { "feature": "Noise Cancellation", "benefit": "Blocks out ambient noise" },
            { "feature": "Touch Controls", "benefit": "Easy playback control" }
          ]
        },
        {
          "id": 14.2,
          "name": "Soapstone",
          "price": 299,
          "description": "Soapstone color",
          "category": "Color",
          "features": [
            { "feature": "Customizable Fit", "benefit": "Comfortable for long wear" }
          ]
        }
      ]
    },
    {
      "id": 15,
      "name": "Kindle Paperwhite",
      "price": 129,
      "description": "E-reader with a high-resolution display, adjustable warm light, and long battery life.",
      "category": "E-Readers",
      "children": [
        {
          "id": 15.1,
          "name": "8GB, Black",
          "price": 129,
          "description": "8GB storage capacity, Black color",
          "category": "Configuration",
          "features": [
            { "feature": "Waterproof", "benefit": "Safe to use near water" },
            { "feature": "Adjustable Warm Light", "benefit": "Comfortable night reading" }
          ]
        },
        {
          "id": 15.2,
          "name": "32GB, Sage",
          "price": 159,
          "description": "32GB storage capacity, Sage color",
          "category": "Configuration",
          "features": [
            { "feature": "Large Storage", "benefit": "Holds thousands of books" }
          ]
        }
      ]
    }
  ]

  );

  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className='flex flex-col justify-center items-center mt-24 mx-24 mb-24'>
      <div className="flex flex-row w-full justify-between px-6 py-2 border rounded-t-lg font-semibold">
        <div className='w-[20%]'>Name</div>
        <div className='w-[20%]'>Price</div>
        <div className='w-[20%]'>Description</div>
        <div className='w-[20%]'>Category</div>
        <div className='w-[20%]'>Actions</div>
      </div>
      {rows.map((row, index) => (
        <>
          <div key={index} className={`flex flex-row w-full justify-between px-6 py-2 border ${selectedRow === index ? 'bg-[#f0f0f0]' : ''}`}>
            <div className='w-[20%]'>{row.name}</div>
            <div className='w-[20%]'>{row.price}</div>
            <div className='w-[20%]'><TooltipText text={row.description} /></div>
            <div className='w-[20%]'>{row.category}</div>
            <div className='w-[20%]'>
              <Button type='default' onClick={() => {
                setSelectedRow(selectedRow === index ? null : index);
              }}>
                {selectedRow === index ? '-' : '+'}
              </Button>
            </div>
          </div>
          {row.children.length > 0 && <Expander children={row.children} index={index} selectedRow={selectedRow} setSelectedRow={setSelectedRow} keys={Object.keys(row.children[0])}/>}
        </>
      ))}
    </div>
  );
};

export default Home;