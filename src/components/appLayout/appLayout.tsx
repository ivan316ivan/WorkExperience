import { Layout, Menu } from "antd";
import styles from "./appLayout.module.css";
import { useNavigate } from "react-router";

const { Sider, Header, Content } = Layout;

interface IProps {
    children: JSX.Element;
}

export const AppLayout = ({ children }: IProps) => {
    const navigate = useNavigate();

    return (
        <Layout className={styles.container}>
            <Header
                className={styles.header}
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Clash Royale Wiki
            </Header>
            <Layout>
                <Sider
                    theme="light"
                    className={styles.sider}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                    }}
                >
                    <Menu
                        items={[
                            {
                                key: "1",
                                label: "Cards",
                                onClick: () => {
                                    navigate("/");
                                },
                            },
                            {
                                key: "2",
                                label: "Maps",
                                onClick: () => {
                                    navigate("/maps");
                                },
                            },
                        ]}
                    />
                </Sider>
                <Content
                    className={styles.content}
                    style={{ marginLeft: 200, marginTop: 50 }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
