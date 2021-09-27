import Header from '@/components/Header.vue';
<template>
  <div>
    <header class="header">
      <div class="header-logo">
        <svg
          width="41"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.786 18.679a1.08 1.08 0 0 1-.146-.09c-1.938-1.183-5.958-3.314-7.665-3.035A67.388 67.388 0 0 0 23.285 21C18.446 18.965 7.213 12.116 1 1l38.268 5.257c.268-.003.516.027.732.1l-.732-.1c-1.575.017-3.884 1.2-4.982 1.886.971 2.143.071 7.916-.5 10.536Z"
            fill="#fff"
          />
          <path
            d="m1 1 39 5.357c-1.486-.5-4.429.982-5.714 1.786M1 1l28.357 10.357M1 1l33.286 7.143M1 1c6.212 11.116 17.446 17.965 22.286 20a67.388 67.388 0 0 1 2.689-5.446m3.382-4.197c1 2.203 3.286 6.75 4.429 7.322m-4.429-7.322c-.835.078-2.141 1.973-3.382 4.197m7.81 3.125c.572-2.62 1.472-8.393.5-10.536m-.5 10.536c-1.873-1.161-6.06-3.411-7.81-3.125"
            stroke="#FF8989"
          />
        </svg>
        <span class="header-letter"> Letter </span>
      </div>

      <nav>
        <ul class="menu">
          <li class="menu-item">Plugins</li>
          <li class="menu-item">Pricing</li>
          <li class="menu-item">LogIn</li>
          <li class="menu-item">Free Trial</li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <section class="hero">
        <div class="hero_container">
          <svg
            id="waves"
            width="1440"
            height="488"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="wave1"
              d="M506.329 191.177c-57.905-82.817-183.788-78.873-229.105 0C243.116 250.54 84.696 291.744 0 259.173V476.5h1440V78.14c-57.7-78.365-229.98-132.117-338.67 12.051-92.63 122.865-244.276 240.635-295.048 105.165-42.957-114.62-162.964-90.264-198.894-34.179-29.53 46.095-43.153 112.818-101.059 30z"
              fill="#FFD6C0"
            />
            <path
              id="wave3"
              d="M190.15 279.006C111.12 196.129 4.048 175.08-74.981 240.856c-41.608 34.63-85.335 74.729-136.019 82.862V488h1651V369.102c-58.99 27.431-112.8 15.294-146.09-15.887-108.04-101.179-248.32-155.257-384.847-74.209-50.222 29.813-94.325 82.877-152.96 0-58.635-82.877-186.102-78.931-231.99 0-45.888 78.93-254.934 82.877-333.963 0z"
              fill="#FFDBC8"
            />
            <path
              id="wave5"
              d="M407.012 322.649C326.015 201.536 101.922 394.979 0 431.839V476.5h1440V336.782c-7.54 6.912-13.88 15.072-18.5 24.043-23.75 46.161-74.92 82.936-121.49 0-46.57-82.935-147.82-78.986-184.27 0-36.45 78.987-202.494 82.936-265.267 0-62.773-82.935-147.82-103.998-210.593-38.176-62.773 65.822-131.621 151.391-232.868 0z"
              fill="#FED6C1"
            />
            <path
              id="wave2"
              class="hide"
              d="M1102 101c119.5-73 182.83-77.581 233.5 27 23.5 48.5 19.8 90.744 104.5 58.173V403.5H0V87C57.7 8.634 387.615-45.786 535 58.5c138.5 98 68 105 195.919 15.5C857.924-14.86 903.5 51.655 966 87c72.5 41 49.76 66.68 136 14z"
              fill="#FFD6C0"
            />
            <path
              id="wave4"
              class="hide"
              d="M73 206.006C-92 142.5-101.471 113.724-180.5 179.5c-41.608 34.63-55.816 60.366-106.5 68.5l-9 167h1736V296.102c-58.99 27.431-231.2-41.42-264.5-72.602-108.04-101.178-219.469-98.542-356-17.494-50.223 29.813-193.257 53.561-279.5 0-109.5-68.006-144.14-42.396-225 0-133.5 69.994-135.125 41.134-242 0z"
              fill="#FFDBC8"
            />
            <path
              id="wave6"
              class="hide"
              d="M821.988 322.649c80.997-121.113 305.092 72.33 407.012 109.19V476.5H-211V336.782c7.538 6.912 13.88 15.072 18.495 24.043 23.751 46.161 74.923 82.936 121.496 0 46.574-82.935 147.82-78.986 184.269 0 36.449 78.987 202.494 82.936 265.267 0 62.773-82.935 147.82-103.998 210.593-38.176 62.773 65.822 131.621 151.391 232.868 0z"
              fill="#FED6C1"
            />
          </svg>
          <img
            class="lamp"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group.png"
            alt=""
          />
          <div class="hero_cta">
            <h2 class="cta_title">Email for Designers</h2>
            <p class="cta_description">
              Dynamic email tool for creators that doesn’t cost a leg. Works
              with Sketch, Figma and XD. Easily import your content and send
              with your favorite API.
            </p>
            <button class="btn cta_btn">Start Free Trial</button>
          </div>
          <div class="container_sun">
            <img
              class="sun"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/sun.png"
              alt=""
            />
          </div>
          <svg
            id="planes"
            viewBox="0 0 1856 964"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fly">
              <g class="fly_right">
                <path
                  d="M1288.96 292.841c.13-.077.27-.175.42-.29 5.6-3.829 17.28-10.813 22.43-10.255 3.43 5.437 6.77 11.581 8.89 15.787 14.15-6.827 46.63-29.002 63.44-63.083l-113.53 21.731c-.81.034-1.54.165-2.17.416l2.17-.416c4.71-.198 11.79 2.954 15.19 4.824-2.57 6.533 1.04 23.579 3.16 31.286z"
                  fill="#fff"
                />
                <path
                  d="M1384.14 235l-115.7 22.147c4.36-1.725 13.39 2.22 17.36 4.408M1384.14 235l-83.11 35.34m83.11-35.34l-98.34 26.555M1384.14 235c-16.81 34.081-49.29 56.256-63.44 63.083-2.12-4.206-5.46-10.35-8.89-15.787m-10.78-11.956c-2.64 6.716-8.75 20.618-12.07 22.501m12.07-22.501c2.51.098 6.71 5.535 10.78 11.956m-22.85 10.545c-2.12-7.707-5.73-24.753-3.16-31.286m3.16 31.286c5.41-3.754 17.57-11.117 22.85-10.545"
                  stroke="#FF9E99"
                />
              </g>
              <g class="fly_right">
                <path
                  d="M1146.01 423.145c-27.71 39.122-92.06 122.57-127.84 143.387-5.96-11.363-15.94-31.971-22.837-50.269-4.539 3.714-14.271 6.934-18.57 8.08-4.36-6.571-7.1-16.573-8.761-27.016-4.693-2.454-20.49 9.225-27.801 15.37-1.197-6.965 16.578-37.618 25.614-52.073 11.323-11.724 124.845-29.871 180.195-37.479z"
                  fill="#fff"
                />
                <path
                  d="M987.911 489.832c27.779-16.59 98.289-53.152 158.099-66.687m-158.099 66.687c.696 6.761 3.58 16.237 7.422 26.431m-7.422-26.431c-6.876 5.418-10.297 25.265-11.148 34.511m169.247-101.198c-27.71 39.122-92.06 122.57-127.84 143.387-5.96-11.363-15.94-31.971-22.837-50.269m150.677-93.118c-55.35 7.608-168.872 25.755-180.195 37.479m0 0c-9.036 14.455-26.811 45.108-25.614 52.073 7.311-6.145 23.108-17.824 27.801-15.37m-2.187-36.703c-.316 8.465.002 22.966 2.187 36.703m8.761 27.016c4.299-1.146 14.031-4.366 18.57-8.08m-18.57 8.08c-4.36-6.571-7.1-16.573-8.761-27.016"
                  stroke="#FF8989"
                />
              </g>
            </g>
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
$color-1: #ffe1d1;
$color-2: #ffdbca;

body {
  font-family: Alegreya, serfif;
  // background: linear-gradient(180deg, $color-1 0%, $color-2 100%);
  //background: linear-gradient(to left, $color-1, $color-2);
}
.header {
  display: grid;
  grid-template-columns: 20% 1fr;
  align-content: center;
  font-weight: bold;
  font-size: 20px;
}
.header-logo {
  justify-self: center;
  align-self: center;
}
.header-letter {
  font-size: 30px;
  color: #6a4a39;
}
.menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.7;
  list-style: none;
  &-item {
    margin: 0 47px;
  }
}
.menu-item:last-of-type {
  color: #ff7678;
  border-bottom: 4px solid #f8d1be;
}

// hero section
.container {
  max-width: 1500px;
}
.hero_container {
  position: relative;
  min-height: 5550px;
  display: grid;
  grid-template-areas:
    "lamp title sun sun"
    "lamp title sun sun";
  grid-template-columns: repeat(4, 1fr);
}
</style>
