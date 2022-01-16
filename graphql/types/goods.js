import gql from 'graphql-tag'

const GET_GOODS = gql`
  query getGoods($order_by: [goods_order_by!] = {title: asc}) {
    goods(order_by: $order_by) {
      id
      title
      description
      price
      image
    }
  }
`

const REMOVE_GOODS = gql`
  mutation remove ($id: uuid!) {
    delete_goods_by_pk(id: $id) {
      id
    }
  }
`

const ADD_GOODS = gql`
  mutation add ($object: goods_insert_input!) {
    insert_goods_one(object: $object) {
      id
      title
      description
      price
      image
    }
  }
`

export { GET_GOODS, REMOVE_GOODS, ADD_GOODS }