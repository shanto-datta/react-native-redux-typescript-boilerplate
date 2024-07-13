import axiosInstance from './apiKit';

export const fetchTodos = async () => {
  const response = await axiosInstance.get('/todos');
  return response.data;
};
