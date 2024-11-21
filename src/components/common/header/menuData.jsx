export const menuData = [
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
        title: "HVD ESSENTIAL",
        path: "/health-packages/hvd-essential",
        newTab: false,
      },
      {
        id: 32,
        title: "HVD ADVANCE",
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
        title: "DIGITAL X-RAY",
        path: "/services/digital-xray",
        newTab: false,
      },
      {
        id: 42,
        title: "ULTRASOUND",
        path: "/services/ultrasound",
        newTab: false,
      },
      {
        id: 43,
        title: "COLOR DOPPLER",
        path: "/services/colordoppler",
        newTab: false,
      },
      {
        id: 44,
        title: "LIVER FIBROSCAN",
        path: "/services/liver-fibroscan",
        newTab: false,
      },
      {
        id: 45,
        title: "BREAST ELASTOGRAPHY",
        path: "/services/breast-elastography",
        newTab: false,
      },
      {
        id: 46,
        title: "ECG",
        newTab: false,
        submenu: [
          {
            id: 461,
            title: "ECG TESTING",
            path: "/services/ecg/ecg-testing",
            newTab: false,
          },
          {
            id: 462,
            title: "ECG MONITORING (AT HOME)",
            path: "/services/ecg/ecgmonitoring",
            newTab: false,
          },
        ],
      },
      {
        id: 47,
        title: "24 HOUR HOLTER MONITORING",
        path: "/services/holter-monitoring",
        newTab: false,
      },
      {
        id: 48,
        title: "ECHO",
        submenu: [
          {
            id: 481,
            title: "2D ECHO",
            path: "/services/echo/2d_echo",
            newTab: false,
          },
          {
            id: 482,
            title: "EXERCISE STRESS ECHO",
            path: "/services/echo/exercisestress",
            newTab: false,
          },
          {
            id: 483,
            title: "DOBUTAMINE STRESS ECHO",
            path: "/services/echo/dobutamine-stress-echo",
            newTab: false,
          },
          {
            id: 484,
            title: "PEDIATRIC ECHO",
            path: "/services/echo/pediatric-echo",
            newTab: false,
          },
          {
            id: 485,
            title: "FETAL ECHO",
            path: "/services/echo/fetal-echo",
            newTab: false,
          },
        ],
      },

      {
        id: 49,
        title: "TMT",
        path: "/services/tmt",
        newTab: false,
      },

      {
        id: 50,
        title: "AMBULATORY BP MONITORING (ABPM)",
        path: "/services/ambulatory",
        newTab: false,
      },
      {
        id: 51,
        title: "ULTRASOUND GUIDED INTERVENTIONS",
        submenu: [
          {
            id: 510,
            title: "FNAC",
            path: "/services/ultrasoundguided/fnac",
            newTab: false,
          },
          {
            id: 511,
            title: "BIOPSY",
            path: "/services/ultrasoundguided/biopsy",
            newTab: false,
          },
          {
            id: 512,
            title: "BREAST BIOPSY",
            path: "/services/ultrasoundguided/breastbiospy",
            newTab: false,
          },

          {
            id: 513,
            title: "PAIN INJECTION",
            path: "/services/ultrasoundguided/pain-injection",
            newTab: false,
          },
          {
            id: 514,
            title: "PRP INJECTION",
            path: "/services/ultrasoundguided/prp-injection",
            newTab: false,
          },

          {
            id: 515,
            title: "ASPIRATION",
            path: "/services/ultrasoundguided/aspiration",
            newTab: false,
          },
          {
            id: 516,
            title: "CATHETER DRAINAGE",
            path: "/services/ultrasoundguided/catheter-drainage",
            newTab: false,
          },
        ],
      },
      {
        id: 52,
        title: "PULMONARY FUNCTION TEST (PFT)",
        path: "/services/pulmonary-function-test",
        newTab: false,
      },
      {
        id: 53,
        title: "UROFLOW METRY",
        path: "/services/uroflowmetry",
        newTab: false,
      },
      {
        id: 54,
        title: "EEG",
        path: "/services/eeg",
        newTab: false,
      },
      {
        id: 55,
        title: "NCV",
        path: "/services/ncv",
        newTab: false,
      },
      {
        id: 56,
        title: "EMG",
        path: "/services/emg",
        newTab: false,
      },

      {
        id: 57,
        title: "PATHOLOGY (BLOOD TESTS)",
        path: "/services/pathology",
        newTab: false,
      },
      {
        id: 58,
        title: "BLOOD PRESSURE MONITORING",
        path: "/services/bloodpressuremonitoring",
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
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "OUR DOCTOR",
        path: "/our-team",
        newTab: false,
      },
      {
        id: 62,
        title: "UPDATES AND EVENTS",
        path: "/updates-and-events",
        newTab: false,
      },
      {
        id: 63,
        title: "SUCCESS STORIES",
        path: "/successStories",
        newTab: false,
      },
      {
        id: 64,
        title: "GALLERY",
        path: "/gallery",
        newTab: false,
      },
    ],
  },
];
export default menuData;
