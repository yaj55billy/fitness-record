# fitness-record

## 前言(專案來由)

此專案發想來自上健身房時所遇到的狀況，自己在疫情之前有上健身房的習慣，那時主要接觸的項目為健力三項(深蹲、硬舉、臥推)，而通常接觸這些項目都期望能穩定進步，所以也會將每次的訓練紀錄下來，而在紀錄中採用過紙筆、excel、健身 App 等等。

在採用紙筆、excel 紀錄的狀況下，容易發生**忘記當下訓練內容、忘記紀錄**等等；而採用健身 App 時能解決紙筆、excel 所遇到的不方便，畢竟我們可以當下就做紀錄。不過健身 App 因為考量到大眾需求，所以功能通常是相當完善的(包含很多運動、營養攝取、熱量控制)，而在完善的狀況下通常**操作步驟就會比較繁雜**。

因為在紀錄中遇到這些狀況，所以開始思考能不能把健身 App 做簡化，**純粹以紀錄為主**，也藉由這樣的機會先以手邊會操作的技術 **Vue.js** 來嘗試製作，資料串接則先以 **json-server** 部署到 Heroku 上(假資料)。

(最初想法是以 Node.js 搭配 mongoDB 做後端部分，然後用 React Native 來處理前端部分)

## 畫面 (9/5 更動)

![專案畫面](https://i.imgur.com/logyWq3.jpg)

## 程式架構(檔案)

使用 **Vue CLI** 建構環境，並且也引入了 **Router、Vuex** 來處理路由跟資料共用(管理)的部分，也透過 src/api.js 這支檔案統一**管理 API** 部分，讓 API 不會散落在各元件內。目前撰寫上使用 Vue3 的 **Composition API**，也將有些**邏輯封裝**並引入到需使用的元件中。

#### 頁面內容: (9/5 更動)

- Index.vue: 首頁
- NotFound.vue: 當使用者隨意輸入不存在的路由，則統一導向此元件(畫面)。
- View.vue: 訓練紀錄頁 (新增、編輯、刪除)
  - 在 onMounted lifecycle 中去觸發 Vuex 拿取資料(api get)。
  - 引入 vue-loading-overlay (plugin)，並**搭配 Vuex 的狀態**實作出頁面 loading。
  - 引入了 ViewList、ViewChart 兩元件，處理列表跟圖表的畫面。
  - ViewList
    - 列表紀錄搭配 **transition** 來處理收合動態。
    - 引入 UpdateForm 的元件，透過父子元件的資料傳遞(**Props、Emit**)加上判斷來新增或編輯資料。(api post、api put)
  - ViewChart
    - 引入 echarts (plugin)

#### SCSS:

- main.scss: 匯集 SCSS 檔案(樣式)。
- utils.scss: 處理變數、@mixin。
- reset.scss: 採用 Reset CSS。
- common.scss: 頁面上的共用樣式 (container、header、footer、title...)
- page/: 以元件內容、畫面區塊作為拆分。(form、index、lightbox、train、notfound)

(layout 上較為單純，所以 SCSS 檔案沒有拆到很細)

## 預期優化與思考方向 (9/5 更動)

- 日期部分的處理。(優化)
- UpdateForm 元件邏輯拆分。(優化)
- 登入功能...
