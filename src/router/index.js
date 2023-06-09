// 1. 引入对应模块
import Vue from 'vue'
import VueRouter  from 'vue-router'

const Home = ()=> import('./../pages/Home/Home');
const Login = ()=> import('./../pages/Login/Login');
const Search = ()=> import('./../pages/Search/Search');
const Goods = ()=> import('./../pages/Goods/Goods');
const Me = ()=> import('./../pages/Me/Me');
const ShopCar = ()=> import('./../pages/ShopCar/ShopCar');
const AdminLogin = ()=> import('./../pages/AdminLogin/AdminLogin');
const Admin = ()=> import('./../pages/Admin/Admin');
const SearchDetail = ()=> import('./../pages/SearchDetail/SearchDetail');

const Profile = ()=> import('./../pages/Me/Children/Profile');
const Update = ()=> import('./../pages/Me/Children/Update');
const EditPwd = ()=> import('./../pages/Me/Children/EditPwd');
const EditPhone = ()=> import('./../pages/Me/Children/EditPhone');
const Sales = ()=> import('./../pages/Me/Children/Sales');
const AdminSales = ()=> import('./../pages/Admin/Children/AdminSales');
const AddGoods = ()=> import('./../pages/Admin/Children/AddGoods');
const AdminGoods = ()=> import('./../pages/Admin/Children/AdminGoods');
const AdminUpdate = ()=> import('./../pages/Admin/Children/AdminUpdate');
const AdminUsers = ()=> import('./../pages/Admin/Children/AdminUsers');
const AdminInfo = ()=> import('./../pages/Admin/Children/AdminInfo');

const GoodsSpecialst = ()=> import('./../pages/Admin/GoodsSpecialist');
const AdminGoodsChange = ()=> import('./../pages/Admin/Children/AdminGoodsChange')
const MarketManager = ()=> import('./../pages/Admin/MarketManager');
const SystemAdmin = ()=> import('./../pages/Admin/SystemAdmin');

// 2. 声明使用
Vue.use(VueRouter);

// 3. 输出路由对象
export default  new VueRouter({
  // 3.1 配置一级路由
  routes: [
	{
	  path: '/home',
	  component: Home,
	  meta: {showHeaderTop: true, showHeaderSearch: true}
	},
	{
	  path: '/login',
	  component: Login
	},
	{
	  path: '/search/:id/:pageNo',
	  component: Search,
	  meta: {showHeaderTop: true, showHeaderSearch: true}
  },
  {
	  path: '/goods/:id',
	  component: Goods,
	  meta: {showHeaderTop: true}
  },
  {
	  path: '/me',
    component: Me,
    children: [
      {path: 'profile', component: Profile},
      {path: 'update', component: Update},
      {path: 'editpwd', component: EditPwd},
      {path: 'editphone', component: EditPhone},
      {path: 'sales', component: Sales},
      {path: '/me',redirect: '/me/profile'}
    ],
  },
  {
	  path: '/shopcar',
	  component: ShopCar,
	  meta: {showHeaderTop: true}
	},
	{
	  path: '/adminlogin',
	  component: AdminLogin,
  },
  {
    path:'/goodsspecialst',
    component: GoodsSpecialst,
    children: [
      {path: 'admingoods', component: AdminGoods},
      {path: 'change',component: AdminGoodsChange},
      {path: '/goodsspecialst',redirect: '/goodsspecialst/admingoods'}
    ],
  },
  {
    path:'/marketmanager',
    component: MarketManager,
    children: [
      {path: 'adminusers', component: AdminUsers},
      {path: '/marketmanager',redirect: '/marketmanager/adminusers'}
    ],
  },
  {
    path:'/systemadmin',
    component: SystemAdmin,
    children: [
      {path: 'admininfo', component: AdminInfo},
      {path: '/systemadmin',redirect: '/systemadmin/admininfo'}
    ],
  },
  {
	  path: '/searchdetail',
    component: SearchDetail,
	  meta: {showHeaderTop: true, showHeaderSearch: true}
  },
	{
	  path: '/',
	  redirect: '/home'
	},
  ]
});
