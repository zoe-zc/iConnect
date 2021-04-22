const iSolutionsMenu = [
  { name: 'Why Us', subMenu: [] },
  { name: 'Promotion', subMenu: [] },
  {
    name: 'Products and Services',
    path: '/Product',
    subMenu: [
      {
        title: 'mCloud',
        subMenu: {
          title: 'Cloud Services',
          list: [
            {
              title: 'Cloud Connect',
              info:
                'A compliant, stable and secure network to connect virtual machine and conduct data synchronization between different cloud servers.'
            },
            {
              title: 'SD-WAN',
              info:
                'Provide enterprise customers with a manageable, high-availability and flexible wide area network (WAN) through a cloud management platform working with MPLS and the Internet.'
            },
            {
              title: 'Multi-Cloud Service',
              info:
                'A one-stop solution to swiftly create, manage and deploy multiple cloud services with exclusive offers via mCloud Portal.'
            },
            {
              title: 'Cloud SMS',
              info:
                'A Web API based SMS platform running on cloud for enterprises to deliver SMS from Application to Person (A2P).'
            },
            {
              title: 'Application Acceleration Network',
              info:
                'Integrate routing, protocol, and link optimal technology to enable optimization and acceleration for applications and services.'
            },
            {
              title: 'CDN',
              info:
                'Improve network performance and fix issues such as network latency, webpage loading speed, download failures and shorten buffering time when streaming videos and music.'
            }
          ]
        }
      },
      // Connectivity
      {
        title: 'Connectivity',
        subMenu: {
          title: 'Connectivity',
          list: [
            {
              title: 'IPLC / IEPL',
              info:
                'IPLC / IEPL supports enterprises with top-tier point-to-point international private line connection with low latency and guaranteed bandwidth, supporting the voice, data and video conferencing services. '
            },
            {
              title: 'MPLS VPN',
              info:
                'Conect enteprise WAN routers via MPLS VPN to establish your own network infrastructure, so as to transmit voice, video and data from point to point in an isolated environment. '
            },
            {
              title: 'IP Transit',
              info:
                'Backed by CMI‘s international partners and powerful cable networks and BGP connection, our IP Transit supports enterprises to connect to the Internet globally.'
            },
            {
              title: 'EVPN',
              info:
                'Set up a resilient private network through a MPLS platform with EVPN technology to transmit voice, video and data through point to point E-LINE and multipoint E-LAN.'
            }
          ]
        }
      },
      // ICT
      {
        title: 'ICT',
        subMenu: {
          title: 'ICT',
          list: [
            {
              title: 'IT Network Security Management',
              info:
                'Our enterprise security solutions shield you from external and internal attacks, giving you overall protection to enhance the security of your server, applications and end-user devices. '
            },
            {
              title: 'Business Data Backup & Recovery Solutions',
              info:
                'Busines Data Backup and Disaster Recovery Solution helps you back up important data before accidents occur, to minimise data loss and negative impact on your business operations. '
            },
            {
              title: 'Office ICT Solutions',
              info:
                'Our Office ICT Solution is tailor-made to the size of your office and scope of work, but is not limited to equipment installation, system configuration, Wi-Fi layout…etc.'
            }
          ]
        }
      },
      // IoT
      {
        title: 'IoT',
        subMenu: {
          title: 'IoT',
          list: [
            {
              title: 'IoT SIM',
              info:
                'IoT SIM supports basic communication services such as wireless data services and SMS, and can be applied to various IoT application scenarios, such as connected car, smart home, wearable devices, sharing economy, mobile payment, environmental monitoring, and smart agriculture.'
            },
            {
              title: 'Smart Hardware',
              info:
                'Provides one-stop hardware solutions for global customers with various types of smart devices, such as smart phones, smart homes, GPS positioning, smart water and electricity meters and modules, OTT Box, MiFi and CPE, and even anti-epidemic equipment.'
            }
          ]
        }
      },
      // IoT Solutions
      {
        title: 'IoT Solutions',
        subMenu: {
          title: 'IoT Solutions',
          list: [
            {
              title: 'Smart Home (RINGA)',
              info:
                'RINGA is a smart life SaaS platform, connecting consumers, manufacturers brands, smart hardware solution providers, and telecom operators, to provide customers with a one-stop smart hardware IoT solutions.'
            },
            {
              title: 'Intelligent Fleet Management',
              info:
                'Our cloud-based intelligent transportation system operation service can take good care of usage-based insurance, fleet management, intelligent travel,and intelligent distribution.'
            },
            {
              title: 'Anti-Epidemic Prevention and Control',
              info:
                'With advanced neural network algorithm integrated with facial and temperature detection, CMI provide a one-stop solution for masked facial and thermal fever screening recognition.'
            },
            {
              title: 'Smart Campus',
              info:
                'Our Smart Campus Solution aims to create a smart environment, covering security, passage, office, service and space, from design, operation and maintenance to meet your business needs.'
            },
            {
              title: 'Smart Agriculture',
              info:
                'Based on state-of-the-art IoT data collection devices, we provide a customised and reliable agricultural solutions, from real-time environment data analysis to crop management.'
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Solutions',
    path: '/Solutions',
    subMenu: [
      {
        title: 'Finance',
        path: '/Finance',
        subMenu: {
          title: 'Finance',
          list: [
            {
              title: 'Low Latency Finance Connect',
              info: '',
              path: '/LowLatencyFinanceConnect'
            },
            {
              title: 'Data Center Service',
              info: '',
              path: '/dataCenterService'
            },
            {
              title: 'Financial Hybrid Cloud Service',
              info: '',
              path: '/FinancialHybridCloudService'
            },
            {
              title: 'Cloud Connect Service',
              info: '',
              path: '/CloudConnect'
            }
          ]
        }
      },
      // Retail
      {
        title: 'Retail',
        subMenu: {
          title: 'Retail',
          list: [
            {
              title: 'Software-defined Retail Network',
              info: ''
            },
            {
              title: 'Retail Messaging System',
              info: ''
            },
            {
              title: 'Retail POS System',
              info: ''
            }
          ]
        }
      },
      // Anti-Epidemic Solution
      {
        title: 'Anti-Epidemic Solution',
        subMenu: {
          title: 'Anti-Epidemic Solution',
          list: [
            {
              title: 'Indoor disinfection solution - Small Area',
              info: ''
            },
            {
              title: 'Indoor disinfection solution - Large Area',
              info: ''
            },
            {
              title: 'Outdoor intelligent solution',
              info: ''
            },
            {
              title: 'Solution for Thermal Fever Screening',
              info: ''
            }
          ]
        }
      },
      // Network Security
      {
        title: 'Network Security',
        subMenu: {
          title: 'Network Security',
          list: [
            {
              title: 'Remote Security Assessment System (RSAS)',
              info: ''
            },
            {
              title: 'Intrusion prevention solution',
              info: ''
            },
            {
              title: 'Anti-DDoS Solution',
              info: ''
            },
            {
              title: 'Anti-DDoS Solution',
              info: 'Web Application Security Solution'
            }
          ]
        }
      },
      // Business Collaboration
      {
        title: 'Business Collaboration',
        subMenu: {
          title: 'Business Collaboration',
          list: [
            {
              title: 'Secure access and acceleration for remote working',
              info: ''
            },
            {
              title: 'Remote working applications and tools',
              info: ''
            },
            {
              title: 'Remote collaboration solution',
              info: ''
            }
          ]
        }
      },
      // Gaming
      {
        title: 'Gaming',
        subMenu: {
          title: 'Gaming',
          list: [
            {
              title: 'Game Cloud Solution',
              info: ''
            },
            {
              title: 'Game Cloud Network Solution',
              info: ''
            },
            {
              title: 'Game Cloud Security Solution',
              info: ''
            }
          ]
        }
      }
    ]
  },
  {
    name: 'Partners',
    subMenu: [
      {
        title: 'Consulting Partners',
        path: '/consultingPartner'
      },
      {
        title: 'Technology Partners',
        path: '/technologyPartner'
      },
      { title: 'Cloud Service Partners', path: '/cloudServicePartner' }
    ]
  },
  {
    name: 'News and Events',
    subMenu: {
      list: [
        { title: 'News', info: 'Learn about the latest news of China Mobile International.' },
        { title: 'Events', info: 'Learn about the latest events of China Mobile International.' }
      ]
    }
  },
  { name: 'Resource and Support', subMenu: [], path: '/resourceAndSupport' },
  { name: 'BSN', subMenu: [], path: '/Bsn' },
  { name: 'Global Resources', subMenu: [] }
]

const menuListData = {
  iSolutions: iSolutionsMenu
}

export default menuListData
