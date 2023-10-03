import React from 'react';
import { database } from '../../database';

export default function useFavoritesData() {
  return { data: database };
}
