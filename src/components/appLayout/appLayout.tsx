import {Layout, Menu } from "antd";
import styles from "./appLayout.module.css"
import { useNavigate } from "react-router";

const {Sider,Header, Content } = Layout

interface IProps {
    children: JSX.Element;
}

export const AppLayout = ({children}:IProps) => {
    const navigate = useNavigate()

    return (<Layout>
        <Header className={styles.header} >Clash Royale App</Header>
        <Layout>
            <Sider theme="light"><Menu items={[{
              key: '1',
              label: 'Cartas',
              onClick: () => {
                navigate("/cartas")
            }
            },
            {
              key: '2',
              label: 'Mapas',
              onClick: () => {
                navigate("/mapas")
              }
            },
            {
              key: '3',
              label: 'Mazos',
              onClick:  () => {
                navigate("/mazos")
              }
            },
            {
                key: '4',
                label: 'Quiz',
                onClick: () => {
                    navigate("/quiz")
                }

            }]} /></Sider>
            <Content>{children}</Content>
        </Layout>
    </Layout>)
}