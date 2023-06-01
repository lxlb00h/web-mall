import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';  // 防跨域
//const BASE_URL = 'http://localhost:8088';  // 服务器真实地址

// 2. 请求方法

// 请求首页的分类数
export const getCategory = (currentPage, size) => ajax(BASE_URL + '/specialist/showAllTypes',{currentPage, size});

// 请求首页的商品数据
export const getHomeShopList = (currentPage, size) => ajax(BASE_URL + '/specialist/showAllTypes',{currentPage, size});

// 请求某分类的商品数据
export const getTypeShopList = (currentPage, size, type_id) => ajax(BASE_URL + '/goods/showTypeGoods',{currentPage, size, type_id});

// 请求推荐的商品数据
export const getRecommendShopList = (params) => ajax(BASE_URL + '/specialist/showQueryTypes', params);

// 请求所有商品
export const getAllgoods = (currentPage, size) => ajax(BASE_URL + '/goods/showAllGoods',{currentPage, size});

// 请求商品详细数据
export const getGoodsDetail = (goods_id) => ajax(BASE_URL + '/goods/showDetail', goods_id);

// 请求商品评价
export const getGoodsComment = (params) => ajax(BASE_URL + '/api/goodscomment', params);

// 发布评论
export const postComment = (goods_id, comment_detail, comment_rating, user_id) => ajax(BASE_URL + '/api/postcomment', {goods_id, comment_detail, comment_rating, user_id}, 'POST');

// 请求短信验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/send_code', {phone});

// 手机验证码登录
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', {phone, code}, 'POST');

// 用户名和密码登录
export const pwdLogin = (user_id, password) => ajax(BASE_URL + '/login/login', {user_id, password});

// 获取登录的用户信息
export const getUserInfo = (params) => ajax(BASE_URL + '/login/user_info',params);

// 查找单个用户信息
export const getUserInfoSingle = (user_id) => ajax(BASE_URL + '/userInfo/userInfo', {user_id});

// 退出登录
export const getLogout = () => ajax(BASE_URL + '/api/logout');

// 修改用户信息
export const changeUserInfo = (params) => ajax(BASE_URL + '/userInfo/updateInfo', params, 'POST');

// 修改用户密码
export const changeUserPwd = (id, oriPwd, newPwd) => ajax(BASE_URL + '/userInfo/updatePassword', {id, oriPwd, newPwd}, 'POST');

// 修改用户手机
export const changeUserPhone = (id, phone, code) => ajax(BASE_URL + '/api/change_user_phone', {id, phone, code}, 'POST');

// 加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price,buy_count, counts) => ajax(BASE_URL + '/cart/addToCart', {user_id, goods_id, goods_name, thumb_url, price, buy_count, counts}, 'POST');

// 单个商品数量的改变
export const changeGoodsCount = (goods_id, count, user_id) => ajax(BASE_URL + '/api/change_goods_count', {goods_id, count, user_id}, 'POST');

// 删除单个商品
export const deleteGoods = (goods_id, user_id) => ajax(BASE_URL + '/cart/deleteGoods', {goods_id, user_id}, 'POST');

// 删除所有商品
export const deleteAllGoods = (user_id) => ajax(BASE_URL + '/api/delete_all_goods', {user_id}, 'POST');

// 添加商品到数据库
export const addGoodsToRecom = (params) => ajax(BASE_URL + '/api/add_shop_recom', params, 'POST');

// 删除recommend单个商品
export const deleteRecomGoods = (goods_id) => ajax(BASE_URL + '/goods/deleteGoods', {goods_id});

// 修改recommend单个商品
export const changeGoodsInfo = (params) => ajax(BASE_URL + '/goods/updateGoodsInfo', params, 'POST');

// 请求购物车的数据
export const getCartsGoods = (params) => ajax(BASE_URL + '/cart/showCart', params);

// 关键词搜索
export const searchKeywords = (currentPage, size, keyword) => ajax(BASE_URL + '/goods/showQueryGoods', {currentPage, size, keyword});

//--管理员登录
export const adminLogin = (manager_id, password) => ajax(BASE_URL + '/manager/login', {manager_id, password});

// 管理员退出登录
export const adminLogout = () => ajax(BASE_URL + '/api/admin_logout');

// 请求所有用户
export const getAllUsers = (currentPage, size) => ajax(BASE_URL + '/marketing/showAllUsers',{currentPage, size});

// 请求所有管理员
export const getAllManager = (currentPage, size) => ajax(BASE_URL + '/systemManager/showAllManagers',{currentPage, size});

// 修改管理员
export const changeManager = (params) => ajax(BASE_URL + '/systemManager/updateManagerInfo',params);

// 请求所有订单
export const getAllOrders = (user_id) => ajax(BASE_URL + '/addNewOrder/findOrder',user_id);