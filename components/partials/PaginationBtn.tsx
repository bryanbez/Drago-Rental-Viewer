import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.segment, styles.leftSegment, page === 0 && styles.disabledSegment]}
        disabled={page === 0}
        onPress={() => onPageChange(page - 1)}>
        <Text style={page === 0 ? styles.disabledText : styles.segmentText}>Prev</Text>
      </TouchableOpacity>

      <View style={styles.middleSegment}>
        <Text style={styles.pageText}>
          Page {page + 1} of {totalPages}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.segment,
          styles.rightSegment,
          page >= totalPages - 1 && styles.disabledSegment,
        ]}
        disabled={page >= totalPages - 1}
        onPress={() => onPageChange(page + 1)}>
        <Text style={page >= totalPages - 1 ? styles.disabledSegment : styles.segmentText}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginVertical: 10,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSegment: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightSegment: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  middleSegment: {
    flex: 1.5,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentText: {
    color: 'white',
    fontWeight: '600',
  },
  disabledSegment: {
    backgroundColor: '#a0a0a0',
  },
  disabledText: {
    color: '#e0e0e0',
  },
  pageText: {
    color: '#333',
    fontWeight: '500',
  },
});
