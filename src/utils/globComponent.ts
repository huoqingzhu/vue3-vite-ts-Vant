import { App, Component } from 'vue'
interface FileType {
    [key: string]: Component
}
// 导入 Components 下面的 所有 index.vue/tsx文件  生成全局组件
const files: Record<string, FileType> = import.meta.globEager('../globComponents/*/index.???')
export default (app: App): void => {
    // 因为通过 import.meta.globEager 返回的列表不能迭代所以直接使用 Object.keys 拿到 key 遍历
    Object.keys(files).forEach((c: string) => {
        const component = files[c].default;
        app.component(component.name as string||c.split('/')[2], component)
        console.log(component.name as string||c.split('/')[2]);
    })
}
