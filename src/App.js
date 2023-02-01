// 引入必要的内置组件
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout';
import { Login } from './components/login';
import { NotFound } from './components/notFound';

function App() {
    return (
        <div className="App">
            {/* 按照规则配置路由 */}
            <BrowserRouter>
                <Routes>
                    <Route index element={<Layout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    { /* 省略部分  */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App