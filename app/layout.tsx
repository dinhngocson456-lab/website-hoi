import type { Metadata } from 'next';
import './globals.css';
import './portal-refresh.css';
import './members.css';
export const metadata:Metadata={title:'Hội GDCSSKCĐ VN | Cổng thông tin',description:'Thông tin Hội, tin tức và quản trị tổ chức, nhân sự, tài chính.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>;}
