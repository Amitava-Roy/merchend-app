// Mock Data for the application
// (In a real app, this data would come from APIs/backend)

export const mockOrders = [
  {
    id: "ORD-001",
    customer: "StyleHub Inc.",
    deadline: "2025-05-15",
    status: "Processing",
    value: 5000,
  },
  {
    id: "ORD-002",
    customer: "Fashion Forward",
    deadline: "2025-05-20",
    status: "Shipped",
    value: 7500,
  },
  {
    id: "ORD-003",
    customer: "Urban Threads",
    deadline: "2025-06-01",
    status: "Pending",
    value: 3200,
  },
];

export const mockProducts = [
  {
    id: "PROD-A1",
    name: "Summer Dress",
    stage: "Design Approved",
    lastUpdate: "2025-04-14",
  },
  {
    id: "PROD-B2",
    name: "Men's Casual Shirt",
    stage: "Sampling",
    lastUpdate: "2025-04-15",
  },
  {
    id: "PROD-C3",
    name: "Denim Jeans",
    stage: "Concept",
    lastUpdate: "2025-04-10",
  },
];

export const mockShipments = [
  {
    id: "SHP-101",
    orderId: "ORD-002",
    destination: "New York, USA",
    status: "In Transit",
    carrier: "DHL",
  },
  {
    id: "SHP-102",
    orderId: "ORD-004",
    destination: "London, UK",
    status: "Delivered",
    carrier: "FedEx",
  },
  {
    id: "SHP-103",
    orderId: "ORD-005",
    destination: "Paris, FR",
    status: "Preparing",
    carrier: "UPS",
  },
];

export const mockVendors = [
  {
    id: "VND-01",
    name: "Fabric Solutions Ltd.",
    material: "Cotton",
    rating: 4.5,
    location: "China",
  },
  {
    id: "VND-02",
    name: "Zipper World",
    material: "Zippers/Buttons",
    rating: 4.8,
    location: "Vietnam",
  },
  {
    id: "VND-03",
    name: "Dye Masters",
    material: "Dyes",
    rating: 4.2,
    location: "India",
  },
];

export const mockSamples = [
  {
    id: "SMP-001",
    productId: "PROD-A1",
    version: 2,
    status: "Approved",
    requestedBy: "Merchandising",
    date: "2025-04-12",
  },
  {
    id: "SMP-002",
    productId: "PROD-B2",
    version: 1,
    status: "Pending Review",
    requestedBy: "Design",
    date: "2025-04-15",
  },
];

// Mock user data (in a real app, this would come from authentication)
export const mockUser = {
  name: "Admin User",
  role: "Senior Management", // Example role: 'Merchandising', 'Logistics', 'Procurement', 'Sampling', 'Senior Management'
};