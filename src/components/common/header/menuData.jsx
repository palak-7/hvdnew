const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Health Packages",
    path: "/health-package",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Digital X-Ray",
        path: "/services/digital-xray",
        newTab: false,
      },
      {
        id: 42,
        title: "Ultrasound",
        path: "/services/ultrasound",
        newTab: false,
      },
      {
        id: 43,
        title: "Liver fibroscan",
        path: "/liver-fibroscan",
        newTab: false,
      },
      {
        id: 44,
        title: "Breast elastography",
        path: "/breast-elastrography",
        newTab: false,
      },
      {
        id: 45,
        title: "ECG",
        newTab: false,
        submenu: [
          {
            id: 451,
            title: "ECG testing",
            path: "/ecg-testing",
            newTab: false,
          },
          {
            id: 452,
            title: "ECG monitoring (at home)",
            path: "/ecg-monitoring",
            newTab: false,
          },
        ],
      },
      {
        id: 46,
        title: "Holter",
        path: "/holter",
        newTab: false,
      },
      {
        id: 47,
        title: "Ambulatory BP monitoring (ABPM)",
        path: "/ambulatory-bp-monitoring",
        newTab: false,
      },
      {
        id: 48,
        title: "ECHO",
        submenu: [
          {
            id: 481,
            title: "2D ECHO",
            path: "/2d-echo",
            newTab: false,
          },
          {
            id: 482,
            title: "Exercise Stress Echo",
            path: "/exercise-stress-echo",
            newTab: false,
          },
          {
            id: 483,
            title: "Dobutamine Stress Echo",
            path: "/dobutamine-stress-echo",
            newTab: false,
          },
          {
            id: 484,
            title: "Fetal Echo",
            path: "/fetal-echo",
            newTab: false,
          },
        ],
      },
      {
        id: 49,
        title: "Uroflowmetry",
        path: "/uroflometry",
        newTab: false,
      },
      {
        id: 50,
        title: "Pulmonary function test (PFT)",
        path: "/pulmonary-funtion-test",
        newTab: false,
      },
      {
        id: 51,
        title: "Ultrasound guided interventions",
        submenu: [
          {
            id: 510,
            title: "FNAC",
            path: "/fanc",
            newTab: false,
          },
          {
            id: 511,
            title: "Biopsy",
            path: "/biopsy",
            newTab: false,
          },
          {
            id: 512,
            title: "Breast Biopsy",
            path: "/breast-biopsy",
            newTab: false,
          },
          {
            id: 513,
            title: "Aspiration",
            path: "/aspiration",
            newTab: false,
          },
          {
            id: 514,
            title: "Drainage",
            path: "/drainage",
            newTab: false,
          },
          {
            id: 515,
            title: "Musculoskeletal injections",
            path: "/musculoskeletal-injections",
            newTab: false,
          },
        ],
      },
      {
        id: 52,
        title: "Pathology",
        path: "/pathology",
        newTab: false,
      },
      {
        id: 53,
        title: "Blood Pressure Monitoring",
        path: "/blood-pressure-monitoring",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  //   {
  //     id: 5,
  //     title: "Team",
  //     path: "/team",
  //     newTab: false,
  //   },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 62,
        title: "Updates and Events",
        path: "/updates-and-events",
        newTab: false,
      },
    ],
  },
];
export default menuData;
