import React from 'react';
import { View, Text, Button } from 'react-native';
import { PaginationProps } from 'app/types/paginationTypes';

export const PaginationButtons: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  //   itemsPerPage,
  //   onItemsPerPageChange,
}) => {
  //   const itemsPerPageOptions = [8, 12, 20];

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button title="Prev" disabled={page === 0} onPress={() => onPageChange(page - 1)} />
      <Text>
        Page {page + 1} of {totalPages}
      </Text>
      <Button
        title="Next"
        disabled={page >= totalPages - 1}
        onPress={() => onPageChange(page + 1)}
      />
    </View>
  );
};
