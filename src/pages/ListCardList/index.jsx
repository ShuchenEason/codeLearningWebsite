import { PlusOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Card, List, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryFakeList } from './service';
import styles from './style.less';
const { Paragraph } = Typography;

const ListCardList = () => {
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 12,
    });
  });
  const list = data?.list || [];
  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        Here you can find popular website you may use in your development!
      </p>
    </div>
  );
  return (
    <PageContainer content={content}>
      <div className={styles.cardList}>
        <List
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[...list]}
          renderItem={(item) => {
            if (item && item.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={
                      [
                        <div><SettingOutlined key="setting" />&nbsp;{item.like}</div>,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,]
                    }
                  >
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Paragraph
                          className={styles.item}
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.description}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
          }}
        />
      </div>
    </PageContainer>
  );
};

export default ListCardList;
