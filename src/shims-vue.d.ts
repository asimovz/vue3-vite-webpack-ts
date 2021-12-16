declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type Nullable<T> = T | null
declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
