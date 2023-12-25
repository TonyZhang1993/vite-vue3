import { defineStore } from 'pinia'
import { GlobalState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/helper/persist'
import { useDetailStore } from '@/stores/modules/detail'

export const useGlobalStore = defineStore({
  id: 'main-global',
  state: (): GlobalState => ({
    // 当前页面是否全屏
    maximize: false,
    // 主题颜色
    primary: '#009688',
    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 侧边栏反转
    asideInverted: false,
    // 头部反转
    headerInverted: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    accordion: true,
    // 面包屑导航
    breadcrumb: true,
    // 面包屑导航图标
    breadcrumbIcon: true,
    // 标签页
    tabs: true,
    // 标签页图标
    tabsIcon: true,
    // 页脚
    footer: true,
    //  浏览数
    views: 0
  }),
  getters: {
    //  通常会在原state基础上有转换
    maximizeGet: (state) => state.maximize,
    viewsGet: (state) => `访问人数：${state.views}`
  },
  actions: {
    // 与getter一样，actions 可以通过this访问当前实例；action 可以是异步的
    // 一般用于在其他功能函数中使用；单纯想要改变state 的值可以通过$patch
    async setPrimary(color: string) {
      //  访问其他store
      const detailStore = useDetailStore()
      if (detailStore.fromPath.length > 0) {
        this.primary = color
      }
    }
  },
  persist: piniaPersistConfig('main-global')
})
