class AppError extends Error {
  status: number = null;

  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

export { AppError };
