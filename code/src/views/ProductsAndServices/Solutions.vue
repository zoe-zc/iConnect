<template>
  <div>
    <div class="isPC">
      <div class="module top-module flex justify-between">
        <div class="desc items-center">
          <span class="text-48 text-primary">Solutions</span>
          <p class="text-24 text-black">Customized solutions to address your business challenges</p>
        </div>
        <img src="@/assets/img/block-img.png" alt="">
      </div>
      <van-dropdown-menu class="mo-hide" active-color="#000000">
        <van-dropdown-item v-model="activeNames" :options="option" title-class="select-title" />
      </van-dropdown-menu>
      <div class="module">
        <van-index-bar :index-list="indexListTab">
          <div v-for="item in dataList" :key="item.title">
            <van-index-anchor />
            <van-cell>
              <div>
                <div class="link-bg">
                  <img :src="item.imgUrl" alt="">
                  <div class="text-con flex items-center">
                    <span class="title text-48">{{ item.title }}</span>
                    <!-- 跳转链接 -->
                    <router-link class="out-box" :to="{path: item.linkTo}">
                      <span class="cursor">
                        <span class="link-icon iconfont iconarrow-right"></span>
                      </span>
                    </router-link>
                  </div>
                </div>
                <link-list :linkList="item.indexList" :noDesc="true"></link-list>
              </div>
            </van-cell>
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/banner.vue'
import linkList from './components/linkList.vue'
export default {
  components: { linkList, Banner },
  name: "index",
  data() {
    return {
      activeNames: 1,
      option: [
        {text: 'Finance', value: 1},
        {text: 'Retail', value: 2},
        {text: 'Enterprise Anti-Epidemic', value: 3},
        {text: 'Network Security', value: 4},
        {text: 'Business Collaboration', value: 5},
        {text: 'Game Cloud', value: 6},
      ],
      indexListTab: [
        'Finance',
        'Retail',
        'Enterprise Anti-Epidemic',
        'Network Security',
        'Business Collaboration',
        'Game Cloud',
      ],
      dataList: [
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-finance-short.png'),
          imgUrl: '',
          linkTo: '/Finance',
          title: 'Finance',
          indexList: [
            {
              id: 11,
              title: 'Low Latency Finance Connect',
              desc: `Backed by China Mobile's reliable and robust network, we can access global exchanges to provide ultra-low network latency connection and highly secure dedicated routes to support companies who operate high-frequency trading (HFT) platforms.`,
              linkTo: '/LowLatencyFinanceConnect',
            },
            {
              id: 12,
              title: 'Data Center Service',
              desc: 'We can tailor-make financial data centre cooperation models based on your business requirements and scale, meeting your needs at every stage of business growth.',
              linkTo: '/dataCenterService',
            },
            {
              id: 13,
              title: 'Financial Hybrid Cloud Service',
              desc: `Adopt a hybrid cloud deployment model to meet the security and compliance requirements of the financial services industry.`,
              linkTo: '/FinancialHybridCloudService',
            },
            {
              id: 14,
              title: 'Cloud Connect',
              desc: 'CMI has 60+ PoPs (point of presence) and Edge locations globally, covering China, Asia, Europe, America, the Middle East and Africa and has partnerships with major cloud service…',
              linkTo: '/CloudConnect',
            },
          ],
        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-retail-short.png'),
          imgUrl: '',
          title: 'Retail',
          linkTo: '',
          indexList: [
            {
              id: 21,
              title: 'Software-defined Retail Network',
              desc: `SD-Branch Network Service provide all rounded network service between retail shops and office and Cloud, which includes Wi-Fi, 4G, firewall in single solution.`,
              srcHas: true,
            },
            {
              id: 22,
              title: 'Retail Messaging System',
              desc: 'By integrated with WhatsApp Business, CMI Retail Messaging system help the retailer to deliver message, promotion, updates to end Customer with a single user friendly portal',
              srcHas: true,
            },
            {
              id: 23,
              title: 'Retail POS System',
              desc: `CMI provides all round payment solution including, Payment Gateway, Payment terminals, Analytics Tools, QR Code Payment, POS integration and On device loyalty program.`,
              srcHas: true,
            },
          ],
        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-enterprise-short.png'),
          imgUrl: '',
          linkTo: '',
          title: 'Enterprise Anti-Epidemic',
          indexList: [
            {
              id: 31,
              title: 'Low Latency Finance Connect',
              desc: `SD-Branch Network Service provide all rounded network service between retail shops and office and Cloud, which includes Wi-Fi, 4G, firewall in single solution.`,
              srcHas: true,
            },
            {
              id: 32,
              title: 'Indoor disinfection solution - Large Area',
              desc: 'By integrated with WhatsApp Business, CMI Retail Messaging system help the retailer to deliver message, promotion, updates to end Customer with a single user friendly portal',
              srcHas: true,
            },
            {
              id: 33,
              title: 'Outdoor intelligent solution',
              desc: `Park security inspection, visitor management, cleaning patrol, and many other services can be completed with intelligent robots, not only improve the efficiency, but also effectively save the cost.`,
              srcHas: true,
            },
            {
              id: 34,
              title: 'Solution for Thermal Fever Screening',
              desc: 'Park security inspection, visitor management, cleaning patrol, and many other services can be completed with intelligent robots, not only improve the efficiency, but also effectively save the cost.',
              srcHas: true,
            },
          ],

        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-network-security-short.png'),
          imgUrl: '',
          title: 'Network Security',
          linkTo: '',
          indexList: [
            {
              id: 41,
              title: 'Remote Security Assessment System',
              desc: `RSAS is a new generation of vulnerability management products developed by CMI and partners based on years of practical experience. It can efficiently detect all kinds of vulnerability risks in the network.`,
              srcHas: true,
            },
            {
              id: 42,
              title: 'Intrusion prevention solution',
              desc: 'The NGTD is a threat defense solution. take sandbox as the detection mechanism which can detect 0day vulnerabilities, CC, advanced malware, special Trojans, etc without upgrading the signature.',
              srcHas: true,
            },
            {
              id: 43,
              title: 'Anti-DDoS Solution',
              desc: `CMI Anti-DDoS solution can realizes the protection of traffic attacks and application layer attacks, detects and cleans packets by packets to ensures the service stable and reliable.`,
              srcHas: true,
            },
            {
              id: 44,
              title: 'Web Application Security Solution',
              desc: 'Web application security solution has a strong self-learning function, through the traffic capture and analysis judgment, it can automatically establish security baseline,help customer to protect the service.',
              srcHas: true,
            },
          ],
        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-business-collaboration-short.png'),
          imgUrl: '',
          title: 'Business Collaboration',
          linkTo: '',
          indexList: [
            {
              id: 51,
              title: 'Secure access and acceleration for remote working',
              desc: `Through CMI's various connectivity products and the wide global connectivity capabilities, enterprises of all sizes can experience secure, stable, low-cost, and highly-efficient end-to-end and end-to-`,
              srcHas: true,
            },
            {
              id: 52,
              title: 'Remote working applications and tools',
              desc: 'Provide enterprises with a series of office suites, including Microsoft Office 365 and Google G Suite etc., to help enterprises achieve operation innovation and improve user experience. We provide a variety of',
              srcHas: true,
            },
            {
              id: 53,
              title: 'Remote collaboration solution',
              desc: `Provide convenient and low-latency multi-user video conferencing tools. We offer voice and HD video communication, mobility, file sharing and other enhancing functions to help enterprises achieve seamless business collaboration.`,
              srcHas: true,
            }
          ],
        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-game-cloud-short.png'),
          imgUrl: '',
          title: 'Game Cloud',
          linkTo: '',
          indexList: [
            {
              id: 61,
              title: 'Game Cloud Client Solution',
              desc: `It can be adapted to PCs, mobile phones, Game Consoles, routers/optical modem and other devices to fully meet the deployment of different scenarios.`,
              srcHas: true,
            },
            {
              id: 62,
              title: 'Game Cloud Network Solution',
              desc: `CMI provides a one-stop cloud solution to support customers' rapid global deployment, improve network coverage performance, reduce network operation and maintenance costs, and effectively increase the download`,
              srcHas: true,
            },
            {
              id: 63,
              title: 'Game Cloud Security Solution',
              desc: `DDoS/CC attack protection prevent you from worrying any attack ; Multiple Protocols to adopts industry-vetted technologies to detect and protect protocols such as HTTP, HTTPS, and TCP.`,
              srcHas: true,
            }
          ],
        },
        {
          // imgUrl: require('@/assets/img/Solutions/elements-image-cloud-sms-short.png'),
          imgUrl: '',
          title: 'Cloud SMS',
          linkTo: '',
          indexList: [
            {
              id: 71,
              title: 'Cloud SMS',
              desc: `Cloud SMS is a Web API based SMS platform running on cloud for enterprises to deliver SMS from A2P upon business scenarios. Web API can be easily integrated into enterprise IT backend system.`,
              srcHas: true,
            }
          ],
        },
      ]
    }
  },
  methods: {
    handleChange() {

    }
  }
}
</script>
<style scoped lang="scss">
  .module {
    margin: 90px auto;
    width: 950px;
  }

  // 隐藏移动端内容
  .mo-hide {
    display: none;
  }
  .isPC {
    display: block;
  }

  .top-module {
    .desc {
      width: 408px;
      font-weight: 600;
    }
    img {
      width: 320px;
    }
  }
  .link-bg {
    padding: 92px 0 92px 52px;
    position: relative;
    &>* {
      position: absolute;
    }

    img {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .text-con {
      z-index: 999;
      .title {
        color: #ffffff;
      }
      .out-box {
        margin-left: 12px;
        display: inline-block;
        width: 30px;
        height: 30px;
        border: solid 1px #ffffff;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        .link-icon {
          font-size: 15px;
          color: #ffffff;
        }
      }
    }
  }

  // 索引框样式
  .van-index-bar {
    position: relative;
    margin-top: 90px;
    // 侧边栏
    /deep/ .van-index-bar__sidebar {
      position: absolute;
      left: -130px;
      top: 120px;
      right: unset;
      max-width: 86px;
      background: #fff;
      .van-index-bar__index {
        &:not(:first-child) {
          margin-top: 18px;
          font-size: 13px;
          color: #6b787f;
        }
      }
    }
    /deep/ .van-index-anchor {
      margin-bottom: 30px;
      padding: 0;
      color: #0085d0;
      font-size: 28px;
      font-weight: 600;
    }
    .van-cell {
      margin-bottom: 90px;
      padding: 0;
      &:after {
        border: 0 none;
      }
    }
  }

@media screen and (max-width: 768px) {
  .module {
    margin: px2rem(30) auto;
    width: px2rem(280);
  }

  .mo-hide {
    display: block;
  }

  .top-module {
    flex-direction: column-reverse;
    .desc {
      margin-top: px2rem(25);
      width: 100%;
      font-size: px2rem(17);
      span {
        font-size: px2rem(28);
      }
    }
    img {
      width: px2rem(164);
      margin: 0 auto;
    }
  }
  .link-bg {
    padding: px2rem(50) 0 px2rem(80) px2rem(20);
    img {
      height: 100%;
    }
    .text-con {
      .title {
        font-size: px2rem(20);
      }
      .out-box {
        display: block;
        width: px2rem(25);
        height: px2rem(25);
        line-height: px2rem(25);
        .link-icon {
          font-size: px2rem(7);
        }
      }
    }
  }

  // 下拉框样式
  /deep/ .van-dropdown-menu {
    height: px2rem(50);
    border-top: solid 1px #dce1e4;
    .van-dropdown-menu__bar {
      height: px2rem(50);
      border-bottom: 1px solid #dce1e4;
      box-shadow: none;
    }
  }
  /deep/ .van-dropdown-menu__title.select-title {
    width: 100%;
    display: flex;
    padding: 0 px2rem(20);
  }
  /deep/ .van-dropdown-menu__title::after {
    right: px2rem(20);
  }
  /deep/ .van-dropdown-item__option {
    padding: 10px px2rem(20);
  }
  
  // 索引框样式
  .van-index-bar {
    margin-top: px2rem(40);
    /deep/ .van-index-bar__sidebar {
      display: none;
    }
  }
}
</style>