import { Button, Card, Typography } from 'antd';
import React from 'react';
// thiết kế giao diẹn hiện thị product
const { Title, Text } = Typography;
const Antd: React.FC = () => {
  const product = {
    name: 'ao thun basic',
    price: '230,000vnd',
    desc: 'Ao thun cotton mac siu mat',
    img: 'logo.png',
  };
  return (
    <Card
      hoverable
      className="mx-auto mt-3 w-80"
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          // src={product.img}
        />
      }
    >
      <Title
        className="mt-3 text-center font-sans font-bold uppercase"
        level={4}
      >
        {product.name}
      </Title>
      <Text className="font-normal">
        <p>Price: {product.price}</p>
      </Text>
      <p>{product.desc}</p>
      <div className="center mx-auto mt-3 flex">
        <Button className="center mx-auto mt-3">Add to card</Button>
      </div>
    </Card>
  );
};

export default Antd;
