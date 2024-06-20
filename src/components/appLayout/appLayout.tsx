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
        <Layout>
            <Header className={styles.header}>Clash Royale Wiki</Header>
            <Layout>
                <Sider theme="light">
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
                            {
                                key: "3",
                                label: "Mazos",
                                onClick: () => {
                                    navigate("/mazos");
                                },
                            },
                            {
                                key: "4",
                                label: "Quiz",
                                onClick: () => {
                                    navigate("/quiz");
                                },
                            },
                        ]}
                    />
                </Sider>
                <Content className={styles.content}>{children}</Content>
            </Layout>
        </Layout>
    );
};
