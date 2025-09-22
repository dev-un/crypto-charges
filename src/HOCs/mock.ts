export const getCurrentUser = async (): Promise<{
  id: number;
  isAdmin: boolean;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        isAdmin: true,
      });
    }, 2000);
  });
};
