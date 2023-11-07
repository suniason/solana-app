import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider , theme} from 'antd'
export default function App({ Component, pageProps }: AppProps) {
  return <ConfigProvider 
  theme={{
    token:{
      colorBgContainer: "#0c215a",
      colorBgElevated: "#0c215a",
      colorText: "#ffffff",
      colorIcon:"#ffffff",
    },
    components: {
      Select: {
        multipleItemBg: "#143285",  
      },
  }}}>
    <Component {...pageProps} />
  </ConfigProvider>
}
