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
        description: "Premium white cement-based putty for a smooth, strong base.",
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
        description: "High-quality white cement for flooring and decorative applications.",
        image: "/assets/images/birla-cement.jpg",
        variants: [
          { id: "BWC-50", name: "50kg" },
          { id: "BWC-25", name: "25kg" },
          { id: "BWC-1", name: "1kg" },
        ]
      },
      {
        name: "Birla White WaterProof Putty (kg)",
        slug: "birla-waterproof-putty",
        description: "Advanced putty with water-repellent properties.",
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
        description: "A dependable and long-lasting paint for interior walls.",
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
        description: "Premium emulsion with a soft sheen and Teflon surface protection.",
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
        description: "Rich matt finish paint that provides a durable wall finish.",
        image: "/assets/images/paint-premium.jpg",
        variants: [
            { id: "APP-20L", name: "20L" },
            { id: "APP-10L", name: "10L" },
            { id: "APP-4L", name: "4L" },
            { id: "APP-1L", name: "1L" },
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
        description: "A selection of high-quality door aldrops in various designs. Choose a design to see available sizes.",
        image: "/assets/images/door-aldrops.jpg",
        subItems: [
          {
            name: "Aldrop SS-2013",
            slug: "aldrop-ss-2013",
            description: "A timeless, decorative aldrop with a rustic antique finish, perfect for traditional doors.",
            image: "/assets/images/door-aldrops.jpg",
            variants: [
              { id: "ALD-ANT-10", name: "10-inch" },
            ]
          },
          {
            name: "Aldrop Two-Star-White",
            slug: "aldrop-two-star-white",
            description: "Sleek and durable aldrop made from high-grade stainless steel for a contemporary look.",
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
            description: "Sleek and durable aldrop made from high-grade stainless steel for a contemporary look.",
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
            description: "An elegant aldrop featuring intricate carvings, adding a touch of luxury to your doors.",
            image: "/assets/images/aldrop-apple.jpg",
            variants: [
              { id: "Apple-12", name: "12-inch" },
              { id: "Apple-10", name: "10-inch" },
            ]
          },
          {
            name: "Aldrop-Lehar",
            slug: "aldrop-lehar",
            description: "An elegant aldrop featuring intricate carvings, adding a touch of luxury to your doors.",
            image: "/assets/images/aldrop-lehar.jpg",
            variants: [
              { id: "Aldrop-Lehar-12", name: "12-inch" },
              { id: "Aldrop-Lehar-10", name: "10-inch" },
            ]
          },
          {
            name: "Aldrop-4-Line",
            slug: "aldrop-4-line",
            description: "A simple yet stylish aldrop in a matte black finish, ideal for modern and minimalist interiors.",
            image: "/assets/images/aldrop-4-line.jpg",
            variants: [
              { id: "ALD-BLK-10", name: "10-inch" },
              { id: "ALD-BLK-8", name: "8-inch" },
            ]
          }
        ]
      },
      {
        name: "Towerbolts",
        slug: "towerbolts",
        description: "A selection of high-quality tower bolts in various designs. Choose a design to see available sizes.",
        image: "/assets/images/towerbolts.jpg",
        subItems: [
          {
            name: "Stainless Steel Towerbolt",
            slug: "stainless-steel-towerbolt",
            description: "Durable and corrosion-resistant stainless steel tower bolts for a modern look.",
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
            description: "Elegant tower bolts with an antique brass finish for a classic aesthetic.",
            image: "/assets/images/towerbolt-brass.jpg",
            variants: [
              { id: "TWB-AB-8", name: "8-inch" },
              { id: "TWB-AB-6", name: "6-inch" },
              { id: "TWB-AB-4", name: "4-inch" },
            ]
          }
        ]
      },
      {
        name: "Door & Cabinet Handles",
        slug: "door-cabinet-handles",
        description: "A variety of stylish handles for doors and cabinets. Choose a style to see available finishes and sizes.",
        image: "/assets/images/handles-category.jpg",
        subItems: [
          {
            name: "Mortise Classic Door Handle",
            slug: "mortise-classic-handle",
            description: "An elegant, classic handle set for main doors, available in several premium finishes.",
            image: "/assets/images/handle-mortise.jpg",
            variants: [
              { id: "HNDL-MC-BR", name: "Brass Finish" },
              { id: "HNDL-MC-SS", name: "Steel Finish" },
              { id: "HNDL-MC-BLK", name: "Matte Black Finish" },
            ]
          },
          {
            name: "Modern Cabinet Pull Handle",
            slug: "modern-cabinet-pull",
            description: "Sleek and minimalist pull handles perfect for modern kitchen cabinets and drawers.",
            image: "/assets/images/handle-pull.jpg",
            variants: [
              { id: "HNDL-CP-6", name: "6-inch length" },
              { id: "HNDL-CP-4", name: "4-inch length" },
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
        description: "High-quality 19mm boards for furniture and construction.",
        image: "/assets/images/boards-19mm.jpg",
        variants: [
          { id: "B19-8x4", name: "Size 8x4" }, { id: "B19-8x3", name: "Size 8x3" },
          { id: "B19-7x4", name: "Size 7x4" }, { id: "B19-7x3", name: "Size 7x3" },
          { id: "B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "Plywood",
        slug: "plywood",
        description: "High-quality plywood available in various thicknesses. Choose a thickness to see available sizes.",
        image: "/assets/images/plywood-main.jpg",
        subItems: [
          {
            name: "Plywood (18mm)",
            slug: "plywood-18mm",
            description: "Durable 18mm plywood for various applications.",
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
            description: "Versatile 12mm plywood for interior and exterior use.",
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
            description: "Lightweight 6mm plywood for paneling and decorative work.",
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
        description: "Strong and durable 30mm flush doors. Select a height to see available widths.",
        image: "/assets/images/flushdoor-main.jpg",
        subItems: [
          {
            name: "Height: 72 inches",
            slug: "flushdoor-30mm-72",
            description: "Flush doors with a height of 72 inches, available in various widths.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-72x24", name: "Width: 24 inches" }, { id: "FD30-72x27", name: "Width: 27 inches" }, { id: "FD30-72x30", name: "Width: 30 inches" }, { id: "FD30-72x33", name: "Width: 33 inches" }, { id: "FD30-72x36", name: "Width: 36 inches" }, { id: "FD30-72x39", name: "Width: 39 inches" }, { id: "FD30-72x42", name: "Width: 42 inches" }, { id: "FD30-72x45", name: "Width: 45 inches" }, { id: "FD30-72x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 75 inches",
            slug: "flushdoor-30mm-75",
            description: "Flush doors with a height of 75 inches, available in various widths.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-75x24", name: "Width: 24 inches" }, { id: "FD30-75x27", name: "Width: 27 inches" }, { id: "FD30-75x30", name: "Width: 30 inches" }, { id: "FD30-75x33", name: "Width: 33 inches" }, { id: "FD30-75x36", name: "Width: 36 inches" }, { id: "FD30-75x39", name: "Width: 39 inches" }, { id: "FD30-75x42", name: "Width: 42 inches" }, { id: "FD30-75x45", name: "Width: 45 inches" }, { id: "FD30-75x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 78 inches",
            slug: "flushdoor-30mm-78",
            description: "Flush doors with a height of 78 inches, available in various widths.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-78x24", name: "Width: 24 inches" }, { id: "FD30-78x27", name: "Width: 27 inches" }, { id: "FD30-78x30", name: "Width: 30 inches" }, { id: "FD30-78x33", name: "Width: 33 inches" }, { id: "FD30-78x36", name: "Width: 36 inches" }, { id: "FD30-78x39", name: "Width: 39 inches" }, { id: "FD30-78x42", name: "Width: 42 inches" }, { id: "FD30-78x45", name: "Width: 45 inches" }, { id: "FD30-78x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 81 inches",
            slug: "flushdoor-30mm-81",
            description: "Flush doors with a height of 81 inches, available in various widths.",
            image: "/assets/images/flushdoor-main.jpg",
            variants: [
              { id: "FD30-81x24", name: "Width: 24 inches" }, { id: "FD30-81x27", name: "Width: 27 inches" }, { id: "FD30-81x30", name: "Width: 30 inches" }, { id: "FD30-81x33", name: "Width: 33 inches" }, { id: "FD30-81x36", name: "Width: 36 inches" }, { id: "FD30-81x39", name: "Width: 39 inches" }, { id: "FD30-81x42", name: "Width: 42 inches" }, { id: "FD30-81x45", name: "Width: 45 inches" }, { id: "FD30-81x48", name: "Width: 48 inches" },
            ]
          },
          {
            name: "Height: 84 inches",
            slug: "flushdoor-30mm-84",
            description: "Flush doors with a height of 84 inches, available in various widths.",
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
        description: "High-quality boards for furniture and construction.",
        image: "/assets/images/boilo.jpg",
        variants: [
          { id: "B19-8x4", name: "Size 8x4" }, { id: "B19-8x3", name: "Size 8x3" },
          { id: "B19-7x4", name: "Size 7x4" }, { id: "B19-7x3", name: "Size 7x3" },
          { id: "B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "HDHMR",
        slug: "HDHMR",
        description: "High-quality boards for furniture and construction.",
        image: "/assets/images/hdhmr.jpg",
        variants: [
          { id: "B19-8x4", name: "Size 8x4" }, { id: "B19-8x3", name: "Size 8x3" },
          { id: "B19-7x4", name: "Size 7x4" }, { id: "B19-7x3", name: "Size 7x3" },
          { id: "B19-6x3", name: "Size 6x3" },
        ]
      },
      {
        name: "MDF",
        slug: "MDF",
        description: "High-quality boards for furniture and construction.",
        image: "/assets/images/mdf.jpg",
        variants: [
          { id: "B19-8x4", name: "Size 8x4" }, { id: "B19-8x3", name: "Size 8x3" },
          { id: "B19-7x4", name: "Size 7x4" }, { id: "B19-7x3", name: "Size 7x3" },
          { id: "B19-6x3", name: "Size 6x3" },
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
        description: "Trusted synthetic resin adhesive for strong bonding.",
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
        description: "High-quality adhesive tape for bonding decorative laminates.",
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
        description: "A range of modern and comfortable toilet seats. Choose a style to view details.",
        image: "/assets/images/toilet-seats.jpg",
        subItems: [
          {
            name: "EWC Seat",
            slug: "ewc-seat",
            description: "Sleek, wall-mounted design that saves space and offers a contemporary look.",
            image: "/assets/images/ewc-seat.jpg",
            variants: [{ id: "TS-EWH-STD", name: "Standard Model" }]
          },
          {
            name: "Anglo Indian Seat",
            slug: "anglo-indian-seat",
            description: "A seamless, easy-to-clean one-piece toilet that sits on the floor.",
            image: "/assets/images/anglo-indian-seat.jpg",
            variants: [{ id: "TS-OPM-STD", name: "Standard Model" }]
          },
          {
            name: "One Piece Seat",
            slug: "one-piece-seat",
            description: "Advanced smart toilet with features like bidet, heated seat, and auto-flush.",
            image: "/assets/images/one-piece-seat.jpg",
            variants: [{ id: "TS-SET-STD", name: "Standard Model" }]
          }
        ]
      },
      {
        name: "Washbasins",
        slug: "washbasins",
        description: "Stylish washbasins in various designs and materials. Choose a style to view details.",
        image: "/assets/images/washbasins.jpg",
        subItems: [
          {
            name: "One Piece Ceramic Basin",
            slug: "one-piece-ceramic-basin",
            description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
            image: "/assets/images/one-piece-ceramic-basin.jpg",
            subItems: [
              {
                name: "One Piece Ceramic Basin 001",
                slug: "one-piece-ceramic-basin-001",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-001.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 002",
                slug: "one-piece-ceramic-basin-002",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-002.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 003",
                slug: "one-piece-ceramic-basin-003",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-003.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 004",
                slug: "one-piece-ceramic-basin-004",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-004.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "One Piece Ceramic Basin 005",
                slug: "one-piece-ceramic-basin-005",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/one-piece-ceramic-basin-005.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          },
          {
            name: "Pedestal Basin",
            slug: "pedestal-basin",
            description: "A classic, floor-standing basin with a pedestal that conceals pipework.",
            image: "/assets/images/basin-pedestal.jpg",
            subItems: [
              {
                name: "Pedistal Basin 001",
                slug: "pedestal-basin-001",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-001.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 002",
                slug: "pedestal-basin-002",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-002.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 003",
                slug: "pedestal-basin-003",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-003.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 004",
                slug: "pedestal-basin-004",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-004.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 005",
                slug: "pedestal-basin-005",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-005.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 006",
                slug: "pedestal-basin-006",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-006.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 007",
                slug: "pedestal-basin-007",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-007.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Pedistal Basin 008",
                slug: "pedestal-basin-008",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/pedestal-basin-008.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          },
          {
            name: "Platform Basin",
            slug: "platform-basin",
            description: "A chic, space-saving basin made from toughened glass for a minimalist look.",
            image: "/assets/images/platform-basin.jpg",
            subItems: [
              {
                name: "Platform Basin 001",
                slug: "platform-basin-001",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/platform-basin-001.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 002",
                slug: "platform-basin-002",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/platform-basin-002.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 003",
                slug: "platform-basin-003",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/platform-basin-003.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              },
              {
                name: "Platform Basin 004",
                slug: "platform-basin-004",
                description: "An elegant basin that sits on top of a counter, perfect for modern bathrooms.",
                image: "/assets/images/platform-basin-004.jpg",
                variants: [{ id: "WB-CTC-STD", name: "Standard Model" }]
              }
            ]
          }
        ]
      },
      {
        name: "Bathroom Vanities",
        slug: "bathroom-vanities",
        description: "Complete vanity sets for modern bathrooms. Choose a style to view details.",
        image: "/assets/images/vanities.jpg",
        subItems: [
           {
            name: "Vanity 001",
            slug: "vanity-001",
            description: "A wall-mounted vanity that creates a sense of space and offers a clean, modern aesthetic.",
            image: "/assets/images/vanity-001.jpg",
            variants: [{ id: "VN-MFV-STD", name: "Standard Set" }]
          },
          {
            name: "Vanity 002",
            slug: "vanity-002",
            description: "A timeless vanity crafted from high-quality wood, adding warmth and elegance.",
            image: "/assets/images/vanity-002.jpg",
            variants: [{ id: "VN-CWV-STD", name: "Standard Set" }]
          },
          {
            name: "Vanity 003",
            slug: "vanity-003",
            description: "A smart, all-in-one solution perfect for smaller bathrooms and powder rooms.",
            image: "/assets/images/vanity-003.jpg",
            variants: [{ id: "VN-CVS-STD", name: "Standard Set" }]
          }
        ]
      },
      {
        name: "Taps & Faucets",
        slug: "taps-faucets",
        description: "High-quality taps and faucets with excellent finish. Choose a type to view details.",
        image: "/assets/images/taps-faucets.jpg",
        subItems: [
          {
            name: "Bib Cock",
            slug: "bib-cock",
            description: "A wall-mounted tap, commonly used for utility areas and outdoor spaces.",
            image: "/assets/images/tap-bib.jpg",
            variants: [{ id: "TF-BC-STD", name: "Chrome Finish" }]
          },
          {
            name: "Pillar Cock",
            slug: "pillar-cock",
            description: "A classic tap design for basins, providing a steady stream of cold or pre-mixed water.",
            image: "/assets/images/tap-pillar.jpg",
            variants: [{ id: "TF-PC-STD", name: "Chrome Finish" }]
          },
          {
            name: "Long Body",
            slug: "long-body",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/long-body.jpg",
            variants: [{ id: "TF-PC-STD", name: "Chrome Finish" }]
          },
          {
            name: "Swan Neck Pillar Cock",
            slug: "swan-neck-pillar-cock",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/swan-neck-pillar-cock.jpg",
            variants: [{ id: "TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "Sink Cock",
            slug: "sink-cock",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/sink-cock.jpg",
            variants: [{ id: "TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "Angle Cock",
            slug: "angle-cock",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/angle-cock.jpg",
            variants: [{ id: "TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "2 Way Angle Cock",
            slug: "way-2-angle-cock",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/way-2-angle-cock.jpg",
            variants: [{ id: "TF-SLM-STD", name: "Chrome Finish" }]
          },
          {
            name: "2 Way Bib Cock",
            slug: "way-2-bib-cock",
            description: "A classic tap design for basins, providing a steady stream water.",
            image: "/assets/images/way-2-bib-cock.jpg",
            variants: [{ id: "TF-SLM-STD", name: "Chrome Finish" }]
          }
        ]
      },
      {
        name: "Mixtures & Diverters",
        slug: "mixtures-diverters",
        description: "A wide selection of mixtures and diverters. Choose a type to view details.",
        image: "/assets/images/mixtures-diverters.jpg",
        subItems: [
          {
            name: "Wall Mixer 3-in-1",
            slug: "wall-mixer-3-in-1",
            description: "An integrated unit with hot and cold water mixing, overhead shower, and hand shower controls.",
            image: "/assets/images/mixer-3in1.jpg",
            variants: [{ id: "MD-WM3-STD", name: "Full Set" }]
          },
          {
            name: "Diverter Mixer Set",
            slug: "diverter-mixer-set",
            description: "Allows you to switch water flow between different outlets, like a tap and a shower.",
            image: "/assets/images/mixer-diverter.jpg",
            variants: [{ id: "MD-DMS-STD", name: "Full Set" }]
          },
          {
            name: "High-Flow Concealed Diverter",
            slug: "high-flow-diverter",
            description: "A concealed diverter designed for high-pressure systems and a clean, minimalist look.",
            image: "/assets/images/diverter-concealed.jpg",
            variants: [{ id: "MD-HCD-STD", name: "Full Set" }]
          }
        ]
      },
      {
        name: "PVC Pipes",
        slug: "pvc-pipes",
        description: "Durable PVC pipes in different sizes.",
        image: "/assets/images/pvc-pipes.jpg",
        variants: [
          { id: "PVC-P-4", name: "4\" Pipe" },
          { id: "PVC-P-3", name: "3\" Pipe" },
          { id: "PVC-P-2", name: "2\" Pipe" },
          { id: "PVC-P-1.5", name: "1.5\" Pipe" },
        ]
      },
      {
        name: "PVC Fittings",
        slug: "pvc-fittings",
        description: "High-quality PVC fittings for various plumbing applications. Choose a type to see available sizes.",
        image: "/assets/images/pvc-fittings.jpg",
        subItems: [
          {
            name: "PVC Tee",
            slug: "pvc-tee",
            description: "PVC Tee fittings to create a branch connection.",
            image: "/assets/images/pvc-tee.jpg",
            variants: [
              { id: "PVCF-T-4", name: "4\"" },
              { id: "PVCF-T-3", name: "3\"" },
              { id: "PVCF-T-2", name: "2\"" },
              { id: "PVCF-T-1.5", name: "1.5\"" },
            ]
          },
          {
            name: "PVC Elbow",
            slug: "pvc-elbow",
            description: "PVC Elbow fittings to change the direction of the pipe.",
            image: "/assets/images/pvc-elbow.jpg",
            variants: [
              { id: "PVCF-E-4", name: "4\"" },
              { id: "PVCF-E-3", name: "3\"" },
              { id: "PVCF-E-2", name: "2\"" },
              { id: "PVCF-E-1.5", name: "1.5\"" },
            ]
          },
          {
            name: "PVC Socket",
            slug: "pvc-socket",
            description: "PVC Socket fittings (couplers) to connect two pipes.",
            image: "/assets/images/pvc-socket.jpg",
            variants: [
              { id: "PVCF-S-4", name: "4\"" },
              { id: "PVCF-S-3", name: "3\"" },
              { id: "PVCF-S-2", name: "2\"" },
              { id: "PVCF-S-1.5", name: "1.5\"" },
            ]
          },
          {
            name: "PVC Reducer",
            slug: "pvc-reducer",
            description: "PVC Reducer fittings to connect pipes of different sizes.",
            image: "/assets/images/pvc-reducer.jpg",
            variants: [
              { id: "PVCF-R-4x3", name: "4\" to 3\"" },
              { id: "PVCF-R-3x2", name: "3\" to 2\"" },
              { id: "PVCF-R-2x1.5", name: "2\" to 1.5\"" },
            ]
          }
        ]
      },
      {
        name: "CPVC Pipes",
        slug: "cpvc-pipes",
        description: "High-quality CPVC pipes for hot and cold water.",
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
        description: "High-quality CPVC fittings for hot and cold water supply lines. Choose a type to see available sizes.",
        image: "/assets/images/cpvc-fittings.jpg",
        subItems: [
          {
            name: "CPVC Tee",
            slug: "cpvc-tee",
            description: "CPVC Tee fittings to create a branch connection.",
            image: "/assets/images/cpvc-tee.jpg",
            variants: [
              { id: "CPVCF-T-1.5", name: "1.5\"" },
              { id: "CPVCF-T-1.25", name: "1.25\"" },
              { id: "CPVCF-T-1", name: "1\"" },
              { id: "CPVCF-T-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "CPVC Elbow",
            slug: "cpvc-elbow",
            description: "CPVC Elbow fittings to change the direction of the pipe.",
            image: "/assets/images/cpvc-elbow.jpg",
            variants: [
              { id: "CPVCF-E-1.5", name: "1.5\"" },
              { id: "CPVCF-E-1.25", name: "1.25\"" },
              { id: "CPVCF-E-1", name: "1\"" },
              { id: "CPVCF-E-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "CPVC Socket",
            slug: "cpvc-socket",
            description: "CPVC Socket fittings (couplers) to connect two pipes.",
            image: "/assets/images/cpvc-socket.jpg",
            variants: [
              { id: "CPVCF-S-1.5", name: "1.5\"" },
              { id: "CPVCF-S-1.25", name: "1.25\"" },
              { id: "CPVCF-S-1", name: "1\"" },
              { id: "CPVCF-S-0.75", name: "0.75\"" },
            ]
          },
          {
            name: "CPVC Reducer",
            slug: "cpvc-reducer",
            description: "CPVC Reducer fittings to connect pipes of different sizes.",
            image: "/assets/images/cpvc-reducer.jpg",
            variants: [
              { id: "CPVCF-R-1.5x1", name: "1.5\" to 1\"" },
              { id: "CPVCF-R-1.25x1", name: "1.25\" to 1\"" },
              { id: "CPVCF-R-1x0.75", name: "1\" to 0.75\"" },
            ]
          }
        ]
      },
       {
        name: "UPVC Pipes",
        slug: "upvc-pipes",
        description: "Strong UPVC pipes for various plumbing needs.",
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
        description: "Durable UPVC fittings for various plumbing and drainage systems. Choose a type to see available sizes.",
        image: "/assets/images/upvc-fittings.jpg",
        subItems: [
          {
            name: "UPVC Tee",
            slug: "upvc-tee",
            description: "UPVC Tee fittings to create a branch connection.",
            image: "/assets/images/upvc-tee.jpg",
            variants: [
              { id: "UPVCF-T-1.5", name: "1.5\"" },
              { id: "UPVCF-T-1.25", name: "1.25\"" },
              { id: "UPVCF-T-1", name: "1\"" },
              { id: "UPVCF-T-0.5", name: "0.5\"" },
            ]
          },
          {
            name: "UPVC Elbow",
            slug: "upvc-elbow",
            description: "UPVC Elbow fittings to change the direction of the pipe.",
            image: "/assets/images/upvc-elbow.jpg",
            variants: [
              { id: "UPVCF-E-1.5", name: "1.5\"" },
              { id: "UPVCF-E-1.25", name: "1.25\"" },
              { id: "UPVCF-E-1", name: "1\"" },
              { id: "UPVCF-E-0.5", name: "0.5\"" },
            ]
          },
          {
            name: "UPVC Socket",
            slug: "upvc-socket",
            description: "UPVC Socket fittings (couplers) to connect two pipes.",
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
            description: "UPVC Reducer fittings to connect pipes of different sizes.",
            image: "/assets/images/upvc-reducer.jpg",
            variants: [
              { id: "UPVCF-R-1.5x1", name: "1.5\" to 1\"" },
              { id: "UPVCF-R-1.25x1", name: "1.25\" to 1\"" },
              { id: "UPVCF-R-1x0.5", name: "1\" to 0.5\"" },
            ]
          }
        ]
      }
    ]
  }
];
