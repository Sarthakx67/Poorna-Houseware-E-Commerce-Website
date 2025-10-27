import { Category } from '../types';

export const catalog: Category[] = [
  {
    name: "Putty and White Cement",
    slug: "putty-white-cement",
    image: "/assets/images/putty-cement-category.jpg",
    items: [
      {
        name: "Birla White Putty (kg)",
        slug: "birla-white-putty",
  description: "White cement-based putty for wall finishing.",
        image: "/assets/images/birla-putty.jpg",
        variants: [
          { id: "BWP-40", name: "40kg" },
          { id: "BWP-20", name: "20kg" },
          { id: "BWP-5", name: "5kg" },
          { id: "BWP-1", name: "1kg" },
        ]
      },
      {
        name: "Birla White Cement (kg)",
        slug: "birla-white-cement",
  description: "White cement for construction and decoration.",
        image: "/assets/images/birla-cement.jpg",
        variants: [
          { id: "BWC-50", name: "50kg" },
          { id: "BWC-25", name: "25kg" },
          { id: "BWC-5", name: "5kg" },
          { id: "BWC-1", name: "1kg" },
        ]
      },
      {
        name: "Birla White WaterProof Putty (kg)",
        slug: "birla-waterproof-putty",
  description: "Waterproof wall putty for smooth surfaces.",
        image: "/assets/images/waterproof-putty.jpg",
        variants: [
          { id: "BWPWP-40", name: "40kg" },
          { id: "BWPWP-20", name: "20kg" },
        ]
      }
    ]
  },
  {
    name: "Asian Paints",
    slug: "asian-paints",
    image: "/assets/images/asian-paints-category.jpg",
    items: [
       {
        name: "Asian Paints - Tractor Emulsion",
        slug: "asian-paints-tractor",
  description: "Emulsion paint for interior walls.",
        image: "/assets/images/paint-tractor.jpg",
        variants: [
          { id: "APT-20L", name: "20L" },
          { id: "APT-10L", name: "10L" },
          { id: "APT-4L", name: "4L" },
          { id: "APT-1L", name: "1L" },
        ]
      },
      {
        name: "Asian Paints - Royale Luxury",
        slug: "asian-paints-royale",
  description: "Luxury emulsion paint for walls.",
        image: "/assets/images/paint-royale.jpg",
        variants: [
            { id: "APR-20L", name: "20L" },
            { id: "APR-10L", name: "10L" },
            { id: "APR-4L", name: "4L" },
            { id: "APR-1L", name: "1L" },
        ]
      },
      {
        name: "Asian Paints - Premium Emulsion",
        slug: "asian-paints-premium",
  description: "Premium emulsion paint for a durable finish.",
        image: "/assets/images/paint-premium.jpg",
        variants: [
            { id: "asian-paints-premium--APP-20L", name: "20L" },
            { id: "asian-paints-premium--APP-10L", name: "10L" },
            { id: "asian-paints-premium--APP-4L", name: "4L" },
            { id: "asian-paints-premium--APP-1L", name: "1L" },
        ]
      },
      {
        name: "Asian Paints - Damp Proof",
        slug: "asian-paints-dampproof",
  description: "Matt finish paint for wall protection.",
        image: "/assets/images/asian-paints-dampproof.jpg",
        variants: [
            { id: "asian-paints-dampproof--APP-20L", name: "20L" },
            { id: "asian-paints-dampproof--APP-10L", name: "10L" },
            { id: "asian-paints-dampproof--APP-4L", name: "4L" },
            { id: "asian-paints-dampproof--APP-1L", name: "1L" },
        ]
      }
    ]
  },      
  {
    name: "Hardware",
    slug: "hardware",
    image: "/assets/images/hardware-category.jpg",
    items: [
      {
        name: "Door Aldrops",
        slug: "door-aldrops",
  description: "Door aldrops for security and style.",
        image: "/assets/images/door-aldrops.jpg",
        subItems: [
          {
            name: "Aldrop SS-2013",
            slug: "aldrop-ss-2013",
            description: "Decorative door aldrop.",
            image: "/assets/images/door-aldrops.jpg",
            variants: [
              { id: "ALD-ANT-12", name: "12-inch" },
              { id: "ALD-ANT-10", name: "10-inch" },
              { id: "ALD-ANT-8", name: "8-inch" },
            ]
          },
          {
            name: "Aldrop Two-Star-White",
            slug: "aldrop-two-star-white",
            description: "Stainless steel door aldrop.",
            image: "/assets/images/twostar.jpg",
            variants: [
              { id: "Two-Star-White-12", name: "12-inch" },
              { id: "Two-Star-White-10", name: "10-inch" },
              { id: "Two-Star-White-8", name: "8-inch" },
            ]
          },
          {
            name: "Aldrop Two-Star-Black",
            slug: "aldrop-two-star-black",
            description: "Stainless steel door aldrop.",
            image: "/assets/images/twostar-black.jpg",
            variants: [
              { id: "Two-Star-Black-12", name: "12-inch" },
              { id: "Two-Star-Black-10", name: "10-inch" },
              { id: "Two-Star-Black-8", name: "8-inch" },
            ]
          },
          {
            name: "Aldrop-Apple",
            slug: "aldrop-apple",
            description: "Carved decorative door aldrop.",
            image: "/assets/images/aldrop-apple.jpg",
            variants: [
              { id: "Apple-12", name: "12-inch" },
              { id: "Apple-10", name: "10-inch" },
              { id: "Apple-8", name: "8-inch" },
            ]
          },
          {
            name: "Aldrop-Lehar",
            slug: "aldrop-lehar",
            description: "Carved decorative door aldrop.",
            image: "/assets/images/aldrop-lehar.jpg",
            variants: [
              { id: "Aldrop-Lehar-12", name: "12-inch" },
              { id: "Aldrop-Lehar-10", name: "10-inch" },
              { id: "Aldrop-Lehar-8", name: "8-inch" },
            ]
          },
          {
            name: "Aldrop-4-Line",
            slug: "aldrop-4-line",
            description: "Matte black door aldrop.",
            image: "/assets/images/aldrop-4-line.jpg",
            variants: [
              { id: "ALD-BLK-12", name: "12-inch" },
              { id: "ALD-BLK-10", name: "10-inch" },
              { id: "ALD-BLK-8", name: "8-inch" },
            ]
          }
        ]
      },
      {
        name: "Towerbolts",
        slug: "towerbolts",
  description: "Tower bolts for doors and windows.",
        image: "/assets/images/towerbolts.jpg",
        subItems: [
          {
            name: "Stainless Steel Towerbolt",
            slug: "stainless-steel-towerbolt",
            description: "Stainless steel tower bolt.",
            image: "/assets/images/towerbolt-steel.jpg",
            variants: [
              { id: "TWB-SS-8", name: "8-inch" },
              { id: "TWB-SS-6", name: "6-inch" },
              { id: "TWB-SS-4", name: "4-inch" },
            ]
          },
          {
            name: "Antique Brass Towerbolt",
            slug: "antique-brass-towerbolt",
            description: "Antique brass tower bolt.",
            image: "/assets/images/towerbolt-brass.jpg",
            variants: [
              { id: "antique-brass-towerbolt--TWB-AB-8", name: "8-inch" },
              { id: "antique-brass-towerbolt--TWB-AB-6", name: "6-inch" },
              { id: "antique-brass-towerbolt--TWB-AB-4", name: "4-inch" },
            ]
          },
          {
            name: "Antique Brass Aluminium",
            slug: "antique-brass-aluminium",
            description: "Antique brass aluminium tower bolt.",
            image: "/assets/images/towerbolt-aluminium.jpg",
            variants: [
              { id: "antique-brass-aluminium--TWB-AB-8", name: "8-inch" },
              { id: "antique-brass-aluminium--TWB-AB-6", name: "6-inch" },
              { id: "antique-brass-aluminium--TWB-AB-4", name: "4-inch" },
            ]
          }
        ]
      },
      {
        name: "Door Handles",
        slug: "door-cabinet-handles",
  description: "Handles for doors and cabinets.",
        image: "/assets/images/handles-category.jpg",
        subItems: [
          {
            name: "Door Handle SS-2013 CNC Wintage",
            slug: "classic-handle-ss2013-wintage",
            description: "Classic main door handle.",
            image: "/assets/images/classic-handle-ss2013-wintage.jpg",
            variants: [
              { id: "HNDL-MC-BR", name: "Standard Finish" },
            ]
          },
          {
            name: "Door Handle Black",
            slug: "door-handle-black",
            description: "Minimalist pull handle for cabinets and drawers.",
            image: "/assets/images/door-handle-black.jpg",
            variants: [
              { id: "HNDL-CP-6", name: "6-inch length" },
              { id: "HNDL-CP-4", name: "4-inch length" },
            ]
          },
          {
            name: "Door Handle Lehar 2 Line",
            slug: "door-handle-lehar-2-line",
            description: "Bar handle for wardrobes and drawers.",
            image: "/assets/images/door-handle-lehar-2-line.jpg",
            variants: [
              { id: "HNDL-BAR-12", name: "12-inch" },
              { id: "HNDL-BAR-10", name: "10-inch" },
              { id: "HNDL-BAR-8", name: "8-inch" },
            ]
          },
          {
            name: "Door Handle Apple",
            slug: "door-handle-apple",
            description: "Cup pull handle for drawers.",
            image: "/assets/images/door-handle-apple.jpg",
            variants: [
              { id: "HNDL-CUP-AB", name: "Antique Brass" },
              { id: "HNDL-CUP-BN", name: "Brushed Nickel" },
              { id: "HNDL-CUP-BLK", name: "Matte Black" },
            ]
          },
          {
            name: "Door Handle 3 Star",
            slug: "door-handle-3-star",
            description: "T-bar knob for cabinets.",
            image: "/assets/images/door-handle-3-star.jpg",
            variants: [
              { id: "HNDL-TBAR-64", name: "64mm center" },
              { id: "HNDL-TBAR-96", name: "96mm center" },
              { id: "HNDL-TBAR-128", name: "128mm center" },
            ]
          },
          {
            name: "Door Handle 2 Star",
            slug: "door-handle-2-star",
            description: "Edge profile handle for cabinets.",
            image: "/assets/images/door-handle-2-star.jpg",
            variants: [
              { id: "HNDL-EDGE-8", name: "8-inch" },
              { id: "HNDL-EDGE-6", name: "6-inch" },
              { id: "HNDL-EDGE-4", name: "4-inch" },
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Boards, Plywood, FlushDoor, Boilo, Hdhmr and Mdf",
    slug: "boards-plywood-doors",
    image: "/assets/images/plywood-category.jpg",
    items: [
      {
        name: "Boards (19mm)",
        slug: "boards-19mm",
  description: "19mm board for furniture and construction.",
        image: "/assets/images/boards-19mm.jpg",
        variants: [
          { id: "boards-19mm--B19-8x4", name: "Size 8x4" }, { id: "boards-19mm--B19-8x3", name: "Size 8x3" },
          { id: "boards-19mm--B19-7x4", name: "Size 7x4" }, { id: "boards-19mm--B19-7x3", name: "Size 7x3" },
          { id: "boards-19mm--B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "Plywood",
        slug: "plywood",
  description: "Plywood for furniture and construction.",
        image: "/assets/images/plywood-main.jpg",
        subItems: [
          {
            name: "Plywood (18mm)",
            slug: "plywood-18mm",
            description: "18mm plywood sheet.",
            image: "/assets/images/plywood-18mm.jpg",
            variants: [
              { id: "P18-8x4", name: "Size 8x4" }, { id: "P18-8x3", name: "Size 8x3" },
              { id: "P18-7x4", name: "Size 7x4" }, { id: "P18-7x3", name: "Size 7x3" },
              { id: "P18-6x3", name: "Size 6x3" },
            ]
          },
          {
            name: "Plywood (12mm)",
            slug: "plywood-12mm",
            description: "12mm plywood sheet.",
            image: "/assets/images/plywood-12mm.jpg",
            variants: [
              { id: "P12-8x4", name: "Size 8x4" }, { id: "P12-8x3", name: "Size 8x3" },
              { id: "P12-7x4", name: "Size 7x4" }, { id: "P12-7x3", name: "Size 7x3" },
              { id: "P12-6x3", name: "Size 6x3" },
            ]
          },
          {
            name: "Plywood (6mm)",
            slug: "plywood-6mm",
            description: "6mm plywood sheet.",
            image: "/assets/images/plywood-6mm.jpg",
            variants: [
              { id: "P6-8x4", name: "Size 8x4" }, { id: "P6-8x3", name: "Size 8x3" },
              { id: "P6-7x4", name: "Size 7x4" }, { id: "P6-7x3", name: "Size 7x3" },
              { id: "P6-6x3", name: "Size 6x3" },
            ]
          }
        ]
      },
      {
        name: "FlushDoor (30mm)",
        slug: "flushdoor-30mm",
  description: "30mm flush doors for interiors.",
        image: "/assets/images/flushdoor-main.jpg",
        subItems: [
          {
            name: "Height: 72 inches",
            slug: "flushdoor-30mm-72",
            description: "Flush door, 72 inches height.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-72x24", name: "Width: 24 inches" }, { id: "FD30-72x27", name: "Width: 27 inches" }, { id: "FD30-72x30", name: "Width: 30 inches" }, { id: "FD30-72x33", name: "Width: 33 inches" }, { id: "FD30-72x36", name: "Width: 36 inches" }, { id: "FD30-72x39", name: "Width: 39 inches" }, { id: "FD30-72x42", name: "Width: 42 inches" }, { id: "FD30-72x45", name: "Width: 45 inches" }, { id: "FD30-72x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 75 inches",
            slug: "flushdoor-30mm-75",
            description: "Flush door, 75 inches height.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-75x24", name: "Width: 24 inches" }, { id: "FD30-75x27", name: "Width: 27 inches" }, { id: "FD30-75x30", name: "Width: 30 inches" }, { id: "FD30-75x33", name: "Width: 33 inches" }, { id: "FD30-75x36", name: "Width: 36 inches" }, { id: "FD30-75x39", name: "Width: 39 inches" }, { id: "FD30-75x42", name: "Width: 42 inches" }, { id: "FD30-75x45", name: "Width: 45 inches" }, { id: "FD30-75x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 78 inches",
            slug: "flushdoor-30mm-78",
            description: "Flush door, 78 inches height.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-78x24", name: "Width: 24 inches" }, { id: "FD30-78x27", name: "Width: 27 inches" }, { id: "FD30-78x30", name: "Width: 30 inches" }, { id: "FD30-78x33", name: "Width: 33 inches" }, { id: "FD30-78x36", name: "Width: 36 inches" }, { id: "FD30-78x39", name: "Width: 39 inches" }, { id: "FD30-78x42", name: "Width: 42 inches" }, { id: "FD30-78x45", name: "Width: 45 inches" }, { id: "FD30-78x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 81 inches",
            slug: "flushdoor-30mm-81",
            description: "Flush door, 81 inches height.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-81x24", name: "Width: 24 inches" }, { id: "FD30-81x27", name: "Width: 27 inches" }, { id: "FD30-81x30", name: "Width: 30 inches" }, { id: "FD30-81x33", name: "Width: 33 inches" }, { id: "FD30-81x36", name: "Width: 36 inches" }, { id: "FD30-81x39", name: "Width: 39 inches" }, { id: "FD30-81x42", name: "Width: 42 inches" }, { id: "FD30-81x45", name: "Width: 45 inches" }, { id: "FD30-81x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 84 inches",
            slug: "flushdoor-30mm-84",
            description: "Flush door, 84 inches height.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-84x24", name: "Width: 24 inches" }, { id: "FD30-84x27", name: "Width: 27 inches" }, { id: "FD30-84x30", name: "Width: 30 inches" }, { id: "FD30-84x33", name: "Width: 33 inches" }, { id: "FD30-84x36", name: "Width: 36 inches" }, { id: "FD30-84x39", name: "Width: 39 inches" }, { id: "FD30-84x42", name: "Width: 42 inches" }, { id: "FD30-84x45", name: "Width: 45 inches" }, { id: "FD30-84x48", name: "Width: 48 inches" },
            ]
          }
        ]
      },
      {
        name: "Boilo",
        slug: "Boilo",
  description: "Board for furniture and construction.",
        image: "/assets/images/boilo.jpg",
        variants: [
          { id: "Boilo--B19-8x4", name: "Size 8x4" }, { id: "Boilo--B19-8x3", name: "Size 8x3" },
          { id: "Boilo--B19-7x4", name: "Size 7x4" }, { id: "Boilo--B19-7x3", name: "Size 7x3" },
          { id: "Boilo--B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "HDHMR",
        slug: "HDHMR",
  description: "Board for furniture and construction.",
        image: "/assets/images/hdhmr.jpg",
        variants: [
          { id: "HDHMR--B19-8x4", name: "Size 8x4" }, { id: "HDHMR--B19-8x3", name: "Size 8x3" },
          { id: "HDHMR--B19-7x4", name: "Size 7x4" }, { id: "HDHMR--B19-7x3", name: "Size 7x3" },
          { id: "HDHMR--B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "MDF",
        slug: "MDF",
  description: "Board for furniture and construction.",
        image: "/assets/images/mdf.jpg",
        variants: [
          { id: "MDF--B19-8x4", name: "Size 8x4" }, { id: "MDF--B19-8x3", name: "Size 8x3" },
          { id: "MDF--B19-7x4", name: "Size 7x4" }, { id: "MDF--B19-7x3", name: "Size 7x3" },
          { id: "MDF--B19-6x3", name: "Size 6x3" },
        ]
      }
    ]
  },
  {
    name: "Adhesive & Mica tape",
    slug: "adhesive-mica-tape",
    image: "/assets/images/adhesive-category.jpg",
    items: [
      {
        name: "Fevicol (kg)",
        slug: "fevicol",
  description: "Synthetic resin adhesive for bonding.",
        image: "/assets/images/fevicol.jpg",
        variants: [
          { id: "FEV-5", name: "5kg" },
          { id: "FEV-2", name: "2kg" },
          { id: "FEV-1", name: "1kg" },
        ]
      },
      {
        name: "MicaTape",
        slug: "mica-tape",
  description: "Adhesive tape for laminates.",
        image: "/assets/images/mica-tape.jpg",
        variants: [
          { id: "MT-24", name: "24" },
        ]
      }
    ]
  },
  {
    name: "Sanitary Ware",
    slug: "sanitary-ware",
    image: "/assets/images/sanitary-category.jpg",
    items: [
      {
        name: "Toilet Seats",
        slug: "toilet-seats",
  description: "Modern toilet seats.",
        image: "/assets/images/toilet-seats.jpg",
        subItems: [
          {
            name: "EWC Seat",
            slug: "ewc-seat",
            description: "Wall-mounted EWC seat.",
            image: "/assets/images/ewc-seat.jpg",
            variants: [{ id: "TS-EWH-STD", name: "Standard Model" }]
          },
          {
            name: "Anglo Indian Seat",
            slug: "anglo-indian-seat",
            description: "Anglo Indian toilet seat.",
            image: "/assets/images/anglo-indian-seat.jpg",
            variants: [{ id: "TS-OPM-STD", name: "Standard Model" }]
          },
          {
            name: "One Piece Seat",
            slug: "one-piece-seat",
            description: "One piece toilet seat.",
            image: "/assets/images/one-piece-seat.jpg",
            variants: [{ id: "TS-SET-STD", name: "Standard Model" }]
          }
        ]
      },
      {
        name: "Washbasins",
        slug: "washbasins",
  description: "Washbasins for bathrooms.",
        image: "/assets/images/washbasins.jpg",
        subItems: [
          {
            name: "One Piece Ceramic Basin",
            slug: "one-piece-ceramic-basin",
            description: "Countertop ceramic basin.",
            image: "/assets/images/one-piece-ceramic-basin.jpg",
            subItems: [
              {
                name: "One Piece Ceramic Basin 001",
                slug: "one-piece-ceramic-basin-001",
                description: "Countertop ceramic basin.",
                image: "/assets/images/one-piece-ceramic-basin-001.jpg",
                variants: [{ id: "one-piece-ceramic-basin-001--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 002",
                slug: "one-piece-ceramic-basin-002",
                description: "Countertop ceramic basin.",
                image: "/assets/images/one-piece-ceramic-basin-002.jpg",
                variants: [{ id: "one-piece-ceramic-basin-002--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 003",
                slug: "one-piece-ceramic-basin-003",
                description: "Countertop ceramic basin.",
                image: "/assets/images/one-piece-ceramic-basin-003.jpg",
                variants: [{ id: "one-piece-ceramic-basin-003--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 004",
                slug: "one-piece-ceramic-basin-004",
                description: "Countertop ceramic basin.",
                image: "/assets/images/one-piece-ceramic-basin-004.jpg",
                variants: [{ id: "one-piece-ceramic-basin-004--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 005",
                slug: "one-piece-ceramic-basin-005",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-005.jpg",
                variants: [{ id: "one-piece-ceramic-basin-005--WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          },
          {
            name: "Pedestal Basin",
            slug: "pedestal-basin",
            description: "Pedestal basin for bathrooms.",
            image: "/assets/images/basin-pedestal.jpg",
            subItems: [
              {
                name: "Pedistal Basin 001",
                slug: "pedestal-basin-001",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-001.jpg",
                variants: [{ id: "pedestal-basin-001--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 002",
                slug: "pedestal-basin-002",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-002.jpg",
                variants: [{ id: "pedestal-basin-002--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 003",
                slug: "pedestal-basin-003",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-003.jpg",
                variants: [{ id: "pedestal-basin-003--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 004",
                slug: "pedestal-basin-004",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-004.jpg",
                variants: [{ id: "pedestal-basin-004--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 005",
                slug: "pedestal-basin-005",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-005.jpg",
                variants: [{ id: "pedestal-basin-005--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 006",
                slug: "pedestal-basin-006",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-006.jpg",
                variants: [{ id: "pedestal-basin-006--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 007",
                slug: "pedestal-basin-007",
                description: "Pedestal basin for bathrooms.",
                image: "/assets/images/pedestal-basin-007.jpg",
                variants: [{ id: "pedestal-basin-007--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 008",
                slug: "pedestal-basin-008",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-008.jpg",
                variants: [{ id: "pedestal-basin-008--WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          },
          {
            name: "Platform Basin",
            slug: "platform-basin",
            description: "Platform basin for bathrooms.",
            image: "/assets/images/platform-basin.jpg",
            subItems: [
              {
                name: "Platform Basin 001",
                slug: "platform-basin-001",
                description: "Platform basin for bathrooms.",
                image: "/assets/images/platform-basin-001.jpg",
                variants: [{ id: "platform-basin-001--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 002",
                slug: "platform-basin-002",
                description: "Platform basin for bathrooms.",
                image: "/assets/images/platform-basin-002.jpg",
                variants: [{ id: "platform-basin-002--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 003",
                slug: "platform-basin-003",
                description: "Platform basin for bathrooms.",
                image: "/assets/images/platform-basin-003.jpg",
                variants: [{ id: "platform-basin-003--WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 004",
                slug: "platform-basin-004",
                description: "Platform basin for bathrooms.",
                image: "/assets/images/platform-basin-004.jpg",
                variants: [{ id: "platform-basin-004--WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          }
        ]
      },
      {
        name: "Bathroom Vanities",
        slug: "bathroom-vanities",
  description: "Bathroom vanity sets.",
        image: "/assets/images/vanities.jpg",
        subItems: [
           {
            name: "Vanity 001",
            slug: "vanity-001",
            description: "Wall-mounted bathroom vanity.",
            image: "/assets/images/vanity-001.jpg",
            variants: [{ id: "VN-MFV-STD", name: "Standard Set" }]
          },
          {
            name: "Vanity 002",
            slug: "vanity-002",
            description: "Wooden bathroom vanity.",
            image: "/assets/images/vanity-002.jpg",
            variants: [{ id: "VN-CWV-STD", name: "Standard Set" }]
          },
          {
            name: "Vanity 003",
            slug: "vanity-003",
            description: "Compact bathroom vanity set.",
            image: "/assets/images/vanity-003.jpg",
            variants: [{ id: "VN-CVS-STD", name: "Standard Set" }]
          }
        ]
      },
      {
        name: "Taps & Faucets",
        slug: "taps-faucets",
  description: "Taps and faucets for bathrooms and kitchens.",
        image: "/assets/images/taps-faucets.jpg",
        subItems: [
          {
            name: "Bib Cock",
            slug: "bib-cock",
            description: "Wall-mounted bib cock tap.",
            image: "/assets/images/tap-bib.jpg",
            variants: [{ id: "TF-BC-STD", name: "Chrome Finish" }]
          },
          {
            name: "Long Body",
            slug: "long-body",
            description: "Long body tap for basins.",
            image: "/assets/images/long-body.jpg",
            variants: [{ id: "long-body--TF-PC-STD", name: "Chrome Finish" }]
          },
          {
            name: "Swan Neck Pillar Cock",
            slug: "swan-neck-pillar-cock",
            description: "Swan neck pillar cock tap.",
            image: "/assets/images/swan-neck-pillar-cock.jpg",
            variants: [{ id: "swan-neck-pillar-cock--TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "Sink Cock",
            slug: "sink-cock",
            description: "Sink cock tap for basins.",
            image: "/assets/images/sink-cock.jpg",
            variants: [{ id: "sink-cock--TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "Angle Cock",
            slug: "angle-cock",
            description: "Angle cock tap for basins.",
            image: "/assets/images/angle-cock.jpg",
            variants: [{ id: "angle-cock--TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "2 Way Angle Cock",
            slug: "way-2-angle-cock",
            description: "2 way angle cock tap.",
            image: "/assets/images/way-2-angle-cock.jpg",
            variants: [{ id: "way-2-angle-cock--TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "2 Way Bib Cock",
            slug: "way-2-bib-cock",
            description: "2 way bib cock tap.",
            image: "/assets/images/way-2-bib-cock.jpg",
            variants: [{ id: "way-2-bib-cock--TF-SLM-STD", name: "Chrome Finish" }]
          }
        ]
      },
      {
        name: "PVC Pipes",
        slug: "pvc-pipes",
  description: "PVC pipes for plumbing.",
        image: "/assets/images/pvc-pipes.jpg",
        variants: [
          { id: "PVC-P-4", name: "4\" Pipe" },
          { id: "PVC-P-3", name: "3\" Pipe" },
          { id: "PVC-P-2.5", name: "2.5\" Pipe" },
          { id: "PVC-P-2", name: "2\" Pipe" },
          { id: "PVC-P-1.5", name: "1.5\" Pipe" },
        ]
      },
      {
        name: "PVC Fittings",
        slug: "pvc-fittings",
  description: "PVC fittings for plumbing applications.",
        image: "/assets/images/pvc-fittings.jpg",
        subItems: [
          {
            name: "PVC Tee",
            slug: "pvc-tee",
            description: "PVC tee fitting.",
            image: "/assets/images/pvc-tee.jpg",
            variants: [
              { id: "PVCF-T-6", name: "6\"" },
              { id: "PVCF-T-5", name: "5\"" },
              { id: "PVCF-T-4", name: "4\"" },
              { id: "PVCF-T-3", name: "3\"" },
              { id: "PVCF-T-2.5", name: "2.5\"" },
              { id: "PVCF-T-2", name: "2\"" },
              { id: "PVCF-T-1.5", name: "1.5\"" },
              { id: "PVCF-T-1.25", name: "1.25\"" },
              { id: "PVCF-T-6x5", name: "6\" to 5\"" },
              { id: "PVCF-T-5x4", name: "5\" to 4\"" },
              { id: "PVCF-T-4x3", name: "4\" to 3\"" },
            ]
          },
          {
            name: "PVC Door Tee",
            slug: "pvc-door-tee",
            description: "PVC door tee fitting.",
            image: "/assets/images/pvc-door-tee.jpg",
            variants: [
              { id: "pvc-door-tee-6", name: "6\"" },
              { id: "pvc-door-tee-5", name: "5\"" },
              { id: "pvc-door-tee-4", name: "4\"" },
              { id: "pvc-door-tee-3", name: "3\"" },
            ]
          },
          {
            name: "PVC Door Elbow",
            slug: "pvc-door-elbow",
            description: "PVC door elbow fitting.",
            image: "/assets/images/pvc-door-elbow.jpg",
            variants: [
              { id: "pvc-door-elbow-6", name: "6\"" },
              { id: "pvc-door-elbow-5", name: "5\"" },
              { id: "pvc-door-elbow-4", name: "4\"" },
              { id: "pvc-door-elbow-3", name: "3\"" },
            ]
          },
          {
            name: "PVC Elbow",
            slug: "pvc-elbow",
            description: "PVC elbow fitting.",
            image: "/assets/images/pvc-elbow.jpg",
            variants: [
              { id: "PVCF-e-6", name: "6\"" },
              { id: "PVCF-e-5", name: "5\"" },
              { id: "PVCF-e-4", name: "4\"" },
              { id: "PVCF-e-3", name: "3\"" },
              { id: "PVCF-e-2.5", name: "2.5\"" },
              { id: "PVCF-e-2", name: "2\"" },
              { id: "PVCF-e-1.5", name: "1.5\"" },
              { id: "PVCF-e-1.25", name: "1.25\"" },
            ]
          },
          {
            name: "PVC Socket",
            slug: "pvc-socket",
            description: "PVC socket fitting.",
            image: "/assets/images/pvc-socket.jpg",
            variants: [
              { id: "PVCF-s-6", name: "6\"" },
              { id: "PVCF-s-5", name: "5\"" },
              { id: "PVCF-s-4", name: "4\"" },
              { id: "PVCF-s-3", name: "3\"" },
              { id: "PVCF-s-2.5", name: "2.5\"" },
              { id: "PVCF-s-2", name: "2\"" },
              { id: "PVCF-s-1.5", name: "1.5\"" },
              { id: "PVCF-s-1.25", name: "1.25\"" },
            ]
          },
          {
            name: "PVC End Cap",
            slug: "pvc-end-cap",
            description: "PVC end cap fitting.",
            image: "/assets/images/pvc-end-cap.jpg",
            variants: [
              { id: "pvc-end-cap-6", name: "6\"" },
              { id: "pvc-end-cap-5", name: "5\"" },
              { id: "pvc-end-cap-4", name: "4\"" },
              { id: "pvc-end-cap-3", name: "3\"" },
              { id: "pvc-end-cap-2.5", name: "2.5\"" },
              { id: "pvc-end-cap-2", name: "2\"" },
              { id: "pvc-end-cap-1.5", name: "1.5\"" },
              { id: "pvc-end-cap-1.25", name: "1.25\"" },
            ]
          },
          {
            name: "PVC Half Set",
            slug: "pvc-half-set",
            description: "PVC half set fitting.",
            image: "/assets/images/pvc-half-set.jpg",
            variants: [
              { id: "pvc-half-set-6", name: "6\"" },
              { id: "pvc-half-set-5", name: "5\"" },
              { id: "pvc-half-set-4", name: "4\"" },
            ]
          },
          {
            name: "PVC Nany Trap",
            slug: "pvc-nany-trap",
            description: "PVC nany trap fitting.",
            image: "/assets/images/pvc-nany-trap.jpg",
            variants: [
              { id: "pvc-nany-trap-4x4", name: "4x4\"" },
              { id: "pvc-nany-trap-4x3", name: "4x3\"" },
              { id: "pvc-nany-trap-4x2", name: "4x2\"" },
            ]
          },
          {
            name: "PVC Reducer",
            slug: "pvc-reducer",
            description: "PVC reducer fitting.",
            image: "/assets/images/pvc-reducer.jpg",
            variants: [
              { id: "PVCF-R-6x5", name: "6\" to 5\"" },
              { id: "PVCF-R-6x4", name: "6\" to 4\"" },
              { id: "PVCF-R-5x4", name: "5\" to 4\"" },
              { id: "PVCF-R-5x3", name: "5\" to 3\"" },
              { id: "PVCF-R-4x3", name: "4\" to 3\"" },
              { id: "PVCF-R-4x2", name: "4\" to 2\"" },
              { id: "PVCF-R-3x2", name: "3\" to 2\"" },
              { id: "PVCF-R-2.5X2", name: "2.5\" to 2\"" },
            ]
          },
          {
            name: "PVC FTE Jali",
            slug: "pvc-fte-jali",
            description: "PVC FTE jali for drainage.",
            image: "/assets/images/pvc-fte-jali.jpg",
            variants: [
              { id: "pvc-fte-jali-6", name: "6\"" },
              { id: "pvc-fte-jali-5", name: "5\"" },
              { id: "pvc-fte-jali-4", name: "4\"" },
              { id: "pvc-fte-jali-3", name: "3\"" },
              { id: "pvc-fte-jali-2.5", name: "2.5\"" },
              { id: "pvc-fte-jali-2", name: "2\"" },
            ]
          },
          {
            name: "PVC Cobal Jali",
            slug: "pvc-cobal-jali",
            description: "PVC cobal jali for drainage.",
            image: "/assets/images/pvc-cobal-jali.jpg",
            variants: [
              { id: "pvc-cobal-jali-6", name: "6\"" },
              { id: "pvc-cobal-jali-5", name: "5\"" },
              { id: "pvc-cobal-jali-4", name: "4\"" },
              { id: "pvc-cobal-jali-3", name: "3\"" },
              { id: "pvc-cobal-jali-2.5", name: "2.5\"" },
              { id: "pvc-cobal-jali-2", name: "2\"" },
            ]
          },
          {
            name: "Pipe Connector",
            slug: "pipe-connector",
            description: "PVC pipe connector.",
            image: "/assets/images/pipe-connector.jpg",
            variants: [
              { id: "pipe-connector-2.5", name: "2.5\"" },
              { id: "pipe-connector-3", name: "3\"" },
              { id: "pipe-connector-4", name: "4\"" },
              { id: "pipe-connector-2", name: "2\"" },
            ]
          }
        ]
      },
      {
        name: "CPVC Pipes",
        slug: "cpvc-pipes",
  description: "CPVC pipes for hot and cold water.",
        image: "/assets/images/cpvc-pipes.jpg",
        variants: [
          { id: "CPVC-P-1.5", name: "1.5\" Pipe" },
          { id: "CPVC-P-1.25", name: "1.25\" Pipe" },
          { id: "CPVC-P-1", name: "1\" Pipe" },
          { id: "CPVC-P-0.75", name: "0.75\" Pipe" },
        ]
      },
      {
        name: "CPVC Fittings",
        slug: "cpvc-fittings",
  description: "CPVC fittings for hot and cold water.",
        image: "/assets/images/cpvc-fittings.jpg",
        subItems: [
          {
            name: "CPVC Tee",
            slug: "cpvc-tee",
            description: "CPVC tee fitting.",
            image: "/assets/images/cpvc-tee.jpg",
            variants: [
              { id: "CPVCF-T-2", name: "2\"" },
              { id: "CPVCF-T-1.5", name: "1.5\"" },
              { id: "CPVCF-T-1.25", name: "1.25\"" },
              { id: "CPVCF-T-1", name: "1\"" },
              { id: "CPVCF-T-0.75", name: "0.75\"" },
              { id: "CPVCF-T-2x1.5", name: "2x1.5\"" },
              { id: "CPVCF-T-1.5x1.25", name: "1.5x1.25\"" },
              { id: "CPVCF-T-1.25x1", name: "1.25x1\"" },
              { id: "CPVCF-T-1x0.75", name: "1x0.75\"" },
            ]
          },
          {
            name: "CPVC Brass Tee",
            slug: "cpvc-brass-tee",
            description: "CPVC brass tee fitting.",
            image: "/assets/images/cpvc-brass-tee.jpg",
            variants: [
              { id: "CPVCF-brass-T-2", name: "2\"" },
              { id: "CPVCF-brass-T-1.5", name: "1.5\"" },
              { id: "CPVCF-brass-T-1.25", name: "1.25\"" },
              { id: "CPVCF-brass-T-1", name: "1\"" },
              { id: "CPVCF-brass-T-0.75", name: "0.75\"" },
              { id: "CPVCF-brass-T-2x1.5", name: "2x1.5\"" },
              { id: "CPVCF-brass-T-1.5x1.25", name: "1.5x1.25\"" },
              { id: "CPVCF-brass-T-1.25x1", name: "1.25x1\"" },
              { id: "CPVCF-brass-T-1x0.75", name: "1x0.75\"" },
            ]
          },
          {
            name: "CPVC Elbow",
            slug: "cpvc-elbow",
            description: "CPVC elbow fitting.",
            image: "/assets/images/cpvc-elbow.jpg",
            variants: [
              { id: "CPVCF-E-2", name: "2\"" },
              { id: "CPVCF-E-1.5", name: "1.5\"" },
              { id: "CPVCF-E-1.25", name: "1.25\"" },
              { id: "CPVCF-E-1", name: "1\"" },
              { id: "CPVCF-E-0.75", name: "0.75\"" },
              { id: "CPVCF-E-T-2x1.5", name: "2x1.5\"" },
              { id: "CPVCF-E-T-1.5x1.25", name: "1.5x1.25\"" },
              { id: "CPVCF-E-T-1.25x1", name: "1.25x1\"" },
              { id: "CPVCF-E-T-1x0.75", name: "1x0.75\"" },
            ]
          },
          {
            name: "CPVC Brass Elbow",
            slug: "cpvc-brass-elbow",
            description: "CPVC brass elbow fitting.",
            image: "/assets/images/cpvc-brass-elbow.jpg",
            variants: [
              { id: "CPVCF-brass-E-2", name: "2\"" },
              { id: "CPVCF-brass-E-1.5", name: "1.5\"" },
              { id: "CPVCF-brass-E-1.25", name: "1.25\"" },
              { id: "CPVCF-brass-E-1", name: "1\"" },
              { id: "CPVCF-brass-E-0.75", name: "0.75\"" },
              { id: "CPVCF-brass-E-0.75", name: "0.75\"" },
              { id: "CPVCF-brass-E-T-2x1.5", name: "2x1.5\"" },
              { id: "CPVCF-brass-E-T-1.5x1.25", name: "1.5x1.25\"" },
              { id: "CPVCF-brass-E-T-1.25x1", name: "1.25x1\"" },
              { id: "CPVCF-brass-E-T-1x0.75", name: "1x0.75\"" },
            ]
          },
          {
            name: "CPVC Socket",
            slug: "cpvc-socket",
            description: "CPVC socket fitting.",
            image: "/assets/images/cpvc-socket.jpg",
            variants: [
              { id: "CPVCF-S-2", name: "2\"" },
              { id: "CPVCF-S-1.5", name: "1.5\"" },
              { id: "CPVCF-S-1.25", name: "1.25\"" },
              { id: "CPVCF-S-1", name: "1\"" },
              { id: "CPVCF-S-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "CPVC Reducer",
            slug: "cpvc-reducer",
            description: "CPVC reducer fitting.",
            image: "/assets/images/cpvc-reducer.jpg",
            variants: [
              { id: "CPVCF-R-2x1.5", name: "2\" to 1.5\"" },
              { id: "CPVCF-R-1.5x1.25", name: "1.5\" to 1.25\"" },
              { id: "CPVCF-R-1.5x1", name: "1.5\" to 1\"" },
              { id: "CPVCF-R-1.25x1", name: "1.25\" to 1\"" },
              { id: "CPVCF-R-1x0.75", name: "1\" to 0.75\"" },
            ]
          },
          {
            name: "CPVC Butch",
            slug: "cpvc-butch",
            description: "CPVC butch fitting.",
            image: "/assets/images/cpvc-butch.jpg",
            variants: [
              { id: "CPVCF-butch-2x1.5", name: "2\" to 1.5\"" },
              { id: "CPVCF-butch-1.5x1.25", name: "1.5\" to 1.25\"" },
              { id: "CPVCF-butch-1.5x1", name: "1.5\" to 1\"" },
              { id: "CPVCF-butch-1.25x1", name: "1.25\" to 1\"" },
              { id: "CPVCF-butch-1x0.75", name: "1\" to 0.75\"" },
            ]
          },
          {
            name: "MTA Normal",
            slug: "cpvc-mta-normal",
            description: "CPVC MTA normal fitting.",
            image: "/assets/images/cpvc-mta-normal.jpg",
            variants: [
              { id: "CPVC-MTA-N-2", name: "2" },
              { id: "CPVC-MTA-N-1.5", name: "1.5" },
              { id: "CPVC-MTA-N-1.25", name: "1.25" },
              { id: "CPVC-MTA-N-1", name: "1" },
              { id: "CPVC-MTA-N-0.75", name: "0.75" },
            ]
          },
          {
            name: "MTA Brass",
            slug: "cpvc-mta-brass",
            description: "CPVC MTA brass fitting.",
            image: "/assets/images/cpvc-mta-brass.jpg",
            variants: [
              { id: "CPVC-MTA-B-2", name: "2" },
              { id: "CPVC-MTA-B-1.5", name: "1.5" },
              { id: "CPVC-MTA-B-1.25", name: "1.25" },
              { id: "CPVC-MTA-B-1", name: "1" },
              { id: "CPVC-MTA-B-0.75", name: "0.75" },
            ]
          },
          {
            name: "FTA Normal",
            slug: "cpvc-fta-normal",
            description: "CPVC FTA normal fitting.",
            image: "/assets/images/cpvc-fta-normal.jpg",
            variants: [
              { id: "CPVC-FTA-N-2", name: "2" },
              { id: "CPVC-FTA-N-1.5", name: "1.5" },
              { id: "CPVC-FTA-N-1.25", name: "1.25" },
              { id: "CPVC-FTA-N-1", name: "1" },
              { id: "CPVC-FTA-N-0.75", name: "0.75" },
            ]
          },
          {
            name: "FTA Brass",
            slug: "cpvc-fta-brass",
            description: "CPVC FTA brass fitting.",
            image: "/assets/images/cpvc-fta-brass.jpg",
            variants: [
              { id: "CPVC-FTA-B-2", name: "2" },
              { id: "CPVC-FTA-B-1.5", name: "1.5" },
              { id: "CPVC-FTA-B-1.25", name: "1.25" },
              { id: "CPVC-FTA-B-1", name: "1" },
              { id: "CPVC-FTA-B-0.75", name: "0.75" },
            ]
          },
          {
            name: "HALFSET",
            slug: "cpvc-halfset",
            description: "CPVC halfset fitting.",
            image: "/assets/images/halfset.jpg",
            variants: [
              { id: "CPVC-HALFSET-2", name: "2" },
              { id: "CPVC-HALFSET-1.5", name: "1.5" },
              { id: "CPVC-HALFSET-1.25", name: "1.25" },
              { id: "CPVC-HALFSET-1", name: "1" },
              { id: "CPVC-HALFSET-0.75", name: "0.75" },
            ]
          }
        ]
      },
       {
        name: "UPVC Pipes",
        slug: "upvc-pipes",
  description: "UPVC pipes for plumbing.",
        image: "/assets/images/upvc-pipes.jpg",
        variants: [
          { id: "UPVC-P-1.5", name: "1.5\" Pipe" },
          { id: "UPVC-P-1.25", name: "1.25\" Pipe" },
          { id: "UPVC-P-1", name: "1\" Pipe" },
          { id: "UPVC-P-0.5", name: "0.5\" Pipe" },
        ]
      },
      {
        name: "UPVC Fittings",
        slug: "upvc-fittings",
  description: "UPVC fittings for plumbing and drainage.",
        image: "/assets/images/upvc-fittings.jpg",
        subItems: [
          {
            name: "UPVC Tee",
            slug: "upvc-tee",
            description: "UPVC tee fitting.",
            image: "/assets/images/upvc-tee.jpg",
            variants: [
              { id: "UPVCF-T-1.5", name: "1.5\"" },
              { id: "UPVCF-T-1.25", name: "1.25\"" },
              { id: "UPVCF-T-1", name: "1\"" },
              { id: "UPVCF-T-0.5", name: "0.5\"" },
            ]
          },
          {
            name: "UPVC Brass Tee",
            slug: "upvc-brass-tee",
            description: "UPVC brass tee fitting.",
            image: "/assets/images/upvc-brass-tee.jpg", // Add your image later
            variants: [
              { id: "UPVCF-brass-T-2", name: "2\"" },
              { id: "UPVCF-brass-T-1.5", name: "1.5\"" },
              { id: "UPVCF-brass-T-1.25", name: "1.25\"" },
              { id: "UPVCF-brass-T-1", name: "1\"" },
              { id: "UPVCF-brass-T-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "UPVC Elbow",
            slug: "upvc-elbow",
            description: "UPVC elbow fitting.",
            image: "/assets/images/upvc-elbow.jpg",
            variants: [
              { id: "UPVCF-E-1.5", name: "1.5\"" },
              { id: "UPVCF-E-1.25", name: "1.25\"" },
              { id: "UPVCF-E-1", name: "1\"" },
              { id: "UPVCF-E-0.5", name: "0.5\"" },
            ]
          },
          {
            name: "UPVC Brass Elbow",
            slug: "upvc-brass-elbow",
            description: "UPVC brass elbow fitting.",
            image: "/assets/images/upvc-brass-elbow.jpg", // Add your image later
            variants: [
              { id: "UPVCF-brass-E-2", name: "2\"" },
              { id: "UPVCF-brass-E-1.5", name: "1.5\"" },
              { id: "UPVCF-brass-E-1.25", name: "1.25\"" },
              { id: "UPVCF-brass-E-1", name: "1\"" },
              { id: "UPVCF-brass-E-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "UPVC Socket",
            slug: "upvc-socket",
            description: "UPVC socket fitting.",
            image: "/assets/images/upvc-socket.jpg",
            variants: [
              { id: "UPVCF-S-1.5", name: "1.5\"" },
              { id: "UPVCF-S-1.25", name: "1.25\"" },
              { id: "UPVCF-S-1", name: "1\"" },
              { id: "UPVCF-S-0.5", name: "0.5\"" },
            ]
          },
          {
            name: "UPVC Reducer",
            slug: "upvc-reducer",
            description: "UPVC reducer fitting.",
            image: "/assets/images/upvc-reducer.jpg",
            variants: [
              { id: "UPVCF-R-1.5x1", name: "1.5\" to 1\"" },
              { id: "UPVCF-R-1.25x1", name: "1.25\" to 1\"" },
              { id: "UPVCF-R-1x0.5", name: "1\" to 0.5\"" },
            ]
          },{
              name: "MTA Normal",
              slug: "upvc-mta-normal",
              description: "UPVC MTA normal fitting.",
              image: "/assets/images/upvc-mta-normal.jpg",
              variants: [
                { id: "UPVC-MTA-N-2", name: "2" },
                { id: "UPVC-MTA-N-1.5", name: "1.5" },
                { id: "UPVC-MTA-N-1.25", name: "1.25" },
                { id: "UPVC-MTA-N-1", name: "1" },
                { id: "UPVC-MTA-N-0.75", name: "0.75" },
              ]
            },
            {
              name: "MTA Brass",
              slug: "upvc-mta-brass",
              description: "UPVC MTA brass fitting.",
              image: "/assets/images/upvc-mta-brass.jpg",
              variants: [
                { id: "UPVC-MTA-B-2", name: "2" },
                { id: "UPVC-MTA-B-1.5", name: "1.5" },
                { id: "UPVC-MTA-B-1.25", name: "1.25" },
                { id: "UPVC-MTA-B-1", name: "1" },
                { id: "UPVC-MTA-B-0.75", name: "0.75" },
              ]
            },
            {
              name: "FTA Normal",
              slug: "upvc-fta-normal",
              description: "UPVC FTA normal fitting.",
              image: "/assets/images/upvc-fta-normal.jpg",
              variants: [
                { id: "UPVC-FTA-N-2", name: "2" },
                { id: "UPVC-FTA-N-1.5", name: "1.5" },
                { id: "UPVC-FTA-N-1.25", name: "1.25" },
                { id: "UPVC-FTA-N-1", name: "1" },
                { id: "UPVC-FTA-N-0.75", name: "0.75" },
              ]
            },
            {
              name: "FTA Brass",
              slug: "upvc-fta-brass",
              description: "UPVC FTA brass fitting.",
              image: "/assets/images/upvc-fta-brass.jpg",
              variants: [
                { id: "UPVC-FTA-B-2", name: "2" },
                { id: "UPVC-FTA-B-1.5", name: "1.5" },
                { id: "UPVC-FTA-B-1.25", name: "1.25" },
                { id: "UPVC-FTA-B-1", name: "1" },
                { id: "UPVC-FTA-B-0.75", name: "0.75" },
              ]
            },
            {
              name: "HALFSET",
              slug: "upvc-halfset",
              description: "UPVC halfset fitting.",
              image: "/assets/images/upvc-halfset.jpg",
              variants: [
                { id: "UPVC-HALFSET-2", name: "2" },
                { id: "UPVC-HALFSET-1.5", name: "1.5" },
                { id: "UPVC-HALFSET-1.25", name: "1.25" },
                { id: "UPVC-HALFSET-1", name: "1" },
                { id: "UPVC-HALFSET-0.75", name: "0.75" },
              ]
            },
        ]
      }
    ]
  }
];
