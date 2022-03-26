interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgSrc: string;
  shop: string;
}

type RootStackParamList = {
  HomeScreen: undefined;
  PLP: undefined;
  PDP: undefined;
  LoginScreen: undefined;
  MyAccount: undefined;
};

namespace ReactNavigation {
  interface RootParamList extends RootStackParamList {}
}