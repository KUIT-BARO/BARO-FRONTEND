export interface HomePromiseDTO {
  promiseId?: number;
  placeName?: string;
  promiseName?: string;
  promiseDate?: string;
  promiseDay?: string;
  promiseMember?: string;
  promiseDday?: number;
}

export interface HomeResponseDTO {
  userName?: string;
  fastestDday?: number;
  promiseDTOs?: HomePromiseDTO[];
}
