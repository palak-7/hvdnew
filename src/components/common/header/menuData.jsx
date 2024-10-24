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
    submenu: [
      {
        id: 31,
        title: "HVD Essential",
        path: "/health-packages/hvd-essential",
        newTab: false,
      },
      {
        id: 32,
        title: "HVD Advance",
        path: "/health-packages/hvd-advance",
        newTab: false,
      },
      {
        id: 33,
        title: "HVD FEVER PACKAGE",
        path: "/health-packages/hvd-fever",
        newTab: false,
      },
     

      {
        id: 34,
        title: "HVD ANC 1 PACKAGE",
        path: "/health-packages/hvd-anc1-package",
        newTab: false,
      },
      {
        id: 35,
        title: "HVD ANC 2 PACKAGE",
        path: "/health-packages/hvd-anc2-package",
        newTab: false,
      },

      {
        id: 36,
        title: "HVD CARDIAC HEALTH PACKAGE",
        path: "/health-packages/hvd-cardiac",
        newTab: false,
      },

      {
        id: 37,
        title: "POLYCYSTIC OVARIAN DISEASE (PCOD) PROFILE",
        path: "/health-packages/polycystic-ovarian-desease-profile",
        newTab: false,
      },
      {
        id: 38,
        title: "POLYCYSTIC OVARIAN DISEASE (PCOD) PROFILE ADVANCE",
        path: "/health-packages/polycystic-ovarian-desease-profile-advance",
        newTab: false,
      },
    ],
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
        title: "Color Doppler",
        path: "/color-doppler",
        newTab: false,
      },
      {
        id: 44,
        title: "Liver fibroscan",
        path: "/liver-fibroscan",
        newTab: false,
      },
      {
        id: 45,
        title: "Breast elastography",
        path: "/breast-elastrography",
        newTab: false,
      },
      {
        id: 46,
        title: "ECG",
        newTab: false,
        submenu: [
          {
            id: 461,
            title: "ECG testing",
            path: "/ecg-testing",
            newTab: false,
          },
          {
            id: 462,
            title: "ECG monitoring (at home)",
            path: "/ecg-monitoring",
            newTab: false,
          },
        ],
      },
      {
        id: 47,
        title: "24 Hour Holter Monitoring",
        path: "/24hour-holter-monitoring",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Holter",
      //   path: "/holter",
      //   newTab: false,
      // },
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
            title: "Pediatric Echo",
            path: "/pediatric-echo",
            newTab: false,
          },
          {
            id: 485,
            title: "Fetal Echo",
            path: "/fetal-echo",
            newTab: false,
          },
        ],
      },

      {
        id: 49,
        title: "TMT",
        path: "/tmt",
        newTab: false,
      },

      {
        id: 50,
        title: "Ambulatory BP monitoring (ABPM)",
        path: "/ambulatory-bp-monitoring",
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
            title: "Pain Injection",
            path: "/pain-injection",
            newTab: false,
          },
          {
            id: 514,
            title: "PRP Injection",
            path: "/prp injection",
            newTab: false,
          },

          {
            id: 515,
            title: "Aspiration",
            path: "/aspiration",
            newTab: false,
          },
          {
            id: 516,
            title: "Catheter Drainage",
            path: "/catheter-drainage",
            newTab: false,
          },
        ],
      },
      {
        id: 52,
        title: "Pulmonary Function Test (PFT)",
        path: "/pulmonary-function-test",
        newTab: false,
      },
      {
        id: 53,
        title: "Uroflow metry",
        path: "/uroflometry",
        newTab: false,
      },
      {
        id: 54,
        title: "EEG",
        path: "/eeg",
        newTab: false,
      },
      {
        id: 55,
        title: "NCV",
        path: "/ncv",
        newTab: false,
      },
      {
        id: 56,
        title: "EMG",
        path: "/emg",
        newTab: false,
      },

      {
        id: 57,
        title: "Pathology (Blood Tests)",
        path: "/pathology",
        newTab: false,
      },
      {
        id: 58,
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
        title: "Our Doctor",
        path: "/our-team",
        newTab: false,
      },
      {
        id: 62,
        title: "Updates and Events",
        path: "/updates-and-events",
        newTab: false,
      },
      {
        id: 63,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
      },
    ],
  },
];
export default menuData;
