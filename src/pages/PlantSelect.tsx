import React, { useEffect, useState } from 'react';
import { 
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View 
} from 'react-native';

import { CarouselButton, CardItems } from '../components/CarouselButton';
import { Header } from '../components/Header';
import { LoadingPage } from '../components/Loading';
import { PlantCardPrimary, PlantProps } from '../components/PlantCardPrimary';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import api from '../service/api';

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<CardItems[]>([] as CardItems[]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([] as PlantProps[])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([] as PlantProps[]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  
  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments',{
        params: {
          _sort: 'title',
          _order: 'asc'
        }
      });
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [])

  async function fetchPlants() {
    const { data } = await api.get('plants', {
      params: {
        _sort: 'name',
        _order: 'asc',
        _page: page,
        _limit: 8 
      }
    });
    if(!data) {
      return setLoadedAll(true);
    }

    if(page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);  
  }

  function handleEnvironmentSelected(key: string) {
    console.log(key);

    setEnvironmentSelected(key);

    if(key === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => plant.environments.includes(key));
    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance: number) {
    if(distance < 1) return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  if(loading) {
    return <LoadingPage />
  } else {
    return (
      <View style={style.container}>
        <View>
          <Header />
          <View style={style.titleWrapper}>
            <Text style={style.title}>Em qual ambiente</Text>
            <Text style={style.titleLight}>você quer colocar sua planta?</Text>
          </View>
        </View>
        
        <View style={style.environmentContainer}>
          <FlatList
            data={environments}
            renderItem={({item}) => (
              <CarouselButton 
                title={item.title}
                active={item.key === environmentSelected ? true : false}
                onPress={() => {
                  handleEnvironmentSelected(item.key);
                }}
              />
              )}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
        </View>
        
        <View style={style.plantsCardsContainer}>
          <FlatList 
            data={filteredPlants}
            renderItem={({item}) => (
              <PlantCardPrimary 
              data={item}
              />
              )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={({distanceFromEnd}) => {
              handleFetchMore(distanceFromEnd);
            }}
            ListFooterComponent={
              loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
            }
            />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleWrapper: {
    width: '100%',
    paddingHorizontal: 32
  },
  title: {
    fontFamily: fonts.complement,
    fontSize: 17,
    lineHeight: 23,
    color: colors.body_dark,
    textAlign: 'left'
  },
  titleLight: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 23,
    color: colors.body_dark,
  },
  environmentContainer: {
    width: '100%',
    marginTop: 40,
    marginBottom: 32,
    marginHorizontal: 32
  },
  plantsCardsContainer: {
    flex: 1,
    alignItems: 'center'
  },
})

export default PlantSelect;