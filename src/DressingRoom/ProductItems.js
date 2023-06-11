import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ProductItems(props) {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <Card className="text-center">
      <img src={item.imgSrc_jpg} alt="123" />
      <Button variant="secondary" size="sm"
        onClick={() => {
          dispatch(chooseClothesAction(item));
        }}
      >
        試衣
      </Button>
    </Card>
  );
}
