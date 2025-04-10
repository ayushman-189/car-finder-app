import type { NextApiRequest, NextApiResponse } from 'next';

const mockCars = [
    {
      id: 1,
      name: "Swift Dzire",
      brand: "Maruti Suzuki",
      image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80",
      fuelType: "Petrol",
      price: 750000,
      seats: 5,
    },
    {
      id: 2,
      name: "Hyundai Creta",
      brand: "Hyundai",
      image: "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-0-1737786601.jpg?width=420&q=60?w=420&q=60",
      fuelType: "Diesel",
      price: 1150000,
      seats: 5,
    },
    {
      id: 3,
      name: "Tata Nexon EV",
      brand: "Tata",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80&q=80",
      fuelType: "Electric",
      price: 1450000,
      seats: 5,
    },
    {
      id: 4,
      name: "Honda City",
      brand: "Honda",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80&q=80",
      fuelType: "Petrol",
      price: 1100000,
      seats: 5,
    },
    {
      id: 5,
      name: "Mahindra Thar",
      brand: "Mahindra",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80&q=80",
      fuelType: "Diesel",
      price: 1390000,
      seats: 4,
    },
    {
      id: 6,
      name: "Kia Seltos",
      brand: "Kia",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
      fuelType: "Petrol",
      price: 1200000,
      seats: 5,
    },
    {
      id: 7,
      name: "MG Hector",
      brand: "MG",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/mg-hector-plus-sharp-pro-evergreen-20-turbo-diesel-7-str1717747558824.jpg?q=80",
      fuelType: "Diesel",
      price: 1600000,
      seats: 5,
    },
    {
      id: 8,
      name: "Renault Kwid",
      brand: "Renault",
      image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
      fuelType: "Petrol",
      price: 480000,
      seats: 5,
    },
    {
      id: 9,
      name: "Volkswagen Virtus",
      brand: "Volkswagen",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      fuelType: "Petrol",
      price: 1190000,
      seats: 5,
    },
    {
      id: 10,
      name: "Skoda Kushaq",
      brand: "Skoda",
      image: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1743160253.jpg?width=420&q=60?w=420&q=60",
      fuelType: "Petrol",
      price: 1390000,
      seats: 5,
    },
    {
      id: 11,
      name: "Toyota Fortuner",
      brand: "Toyota",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
      fuelType: "Diesel",
      price: 3200000,
      seats: 7,
    },
    {
      id: 12,
      name: "Hyundai Verna",
      brand: "Hyundai",
      image: "https://images.drivespark.com/webp/fit-in/450x350/car-image/car/3380673-hyundai_verna.jpg",
      fuelType: "Petrol",
      price: 1100000,
      seats: 5,
    },
  ];

  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
      search = '',
      fuelType = '',
      minPrice = '',
      maxPrice = '',
      seats = '',
    } = req.query;
  
    let filtered = mockCars.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes((search as string).toLowerCase()) ||
        car.brand.toLowerCase().includes((search as string).toLowerCase());
  
      const matchesFuel = fuelType === '' || car.fuelType === fuelType;
      const matchesSeats = seats === '' || car.seats === parseInt(seats as string);
      const matchesMinPrice =
        minPrice === '' || car.price >= parseInt(minPrice as string);
      const matchesMaxPrice =
        maxPrice === '' || car.price <= parseInt(maxPrice as string);
  
      return (
        matchesSearch &&
        matchesFuel &&
        matchesSeats &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  
    res.status(200).json(filtered);
  }