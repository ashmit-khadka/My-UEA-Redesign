import React, { useEffect } from 'react'
import {ReactComponent as IconClose} from '../assets/close.svg'
import {ReactComponent as IconHistory} from '../assets/history.svg'
import {ReactComponent as IconTrend} from '../assets/trend.svg'
import {ReactComponent as IconSearch} from '../assets/loupe.svg'

//redux
import { useSelector, useDispatch } from 'react-redux';

import _ from 'lodash'
import faker from "faker";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import linksDB from '../database/links.json'
import newsDB from '../database/news.json'

const searchHistory = [
	{
		'text': "UEA's Learning Portal"
	},
	{
		'text': "CMP My School"
	},
	{
		'text': "My Schedule and Email"
	}
]

const searchTrending = [
	{
		'text': "Covid-19 Guidance"
	},
	{
		'text': "Covid-19 Checklist"
	},
	{
		'text': "Covid-19 Lateral Flow Testing"
	}
] 

const source = Array.prototype.concat(linksDB.data, newsDB.data)

  
  const initialState = {
    loading: false,
    results: [],
    value: '',
  }


  

const exampleReducer = (state, action) => {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query }
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results }
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection }
  
      default:
        throw new Error()
    }
  }

const SearchItem = (props) => {

    
    let image = ''
	let type = ''
	let typeName = ''
	
    if (props.data.type == 'link') {
		image = './assets/links/' + props.data.image
		type = 'model-item--link'
	}
    else if (props.data.type === 'news') {
		console.log('news')
		image = './assets/news/' + props.data.image
		type = 'model-item--news'

	}
 

    console.log(props.data.type)

    return (
        <div className='model-item'>
            <img src={image}></img>
            <div className='model-item__content'>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
                <span className={type}>{props.data.type}</span>
            </div>
        </div>
    )
}

const ExistingItem = (props) => {
	return (
		<div className='search-item'>
			{props.type === 'history' ?  <IconHistory/> : <IconTrend/>}
			<p>{props.data.text}</p>
		</div>
	)
}

const SearchModel = () => 
{

    const helpType = useSelector(state => state.HelpReducer)

    const [state, dispatch] = React.useReducer(exampleReducer, initialState)
    const { loading, results, value } = state
    //console.log(results)

    const timeoutRef = React.useRef()
    const handleSearchChange = React.useCallback((e, data) => {
      clearTimeout(timeoutRef.current)
      dispatch({ type: 'START_SEARCH', query: data.value })
  
      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: 'CLEAN_QUERY' })
          return
        }
  
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        const isMatch = (result) => re.test(result.title)
  
        dispatch({
          type: 'FINISH_SEARCH',
          results: _.filter(source, isMatch),
        })
      }, 300)
    }, [])
    React.useEffect(() => {
      return () => {
        clearTimeout(timeoutRef.current)
      }
    }, [])

    useEffect(() => {
      document.getElementById("model-search").addEventListener("click", function( e ){
          e = window.event || e; 
          if(this === e.target) {
              hide()
          }
      });    
  }, [])

    const hide = () => 
    {
        document.getElementById('model-search').classList.remove('model__show')
        dispatch({ type: 'CLEAN_QUERY' })
	}
	
	let historyItems = []

	searchHistory.forEach(item => {
		historyItems.push(<ExistingItem type={'history'} data={item}/>)
	})

	let tredingItems = []

	searchTrending.forEach(item => {
		tredingItems.push(<ExistingItem type={'trending'} data={item}/>)
	})

    return (
        <div id='model-search' className='model'>
            <div className='model__content'>
                <div className='model__controls'>
                    <IconSearch className='button'/>
                    <h2>Search</h2>
                    <IconClose className='button' onClick={hide}/>
                </div>
                <div className='search__bar'>
                    <Search
						id='search-bar'
                        loading={loading}
                        onResultSelect={(e, data) =>
                            dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
                        }
                        onSearchChange={handleSearchChange}
                        //results={results}
                        value={value}
                    />                
                </div>
                <div className='search__filter'>
                  <label class="container">Protal
                    <input type="checkbox" checked="checked"></input>
                  </label>
                  <label class="container">News
                    <input type="checkbox" checked="checked"></input>
                  </label>
                  <label class="container">Events
                    <input type="checkbox" checked="checked"></input>
                  </label>
                  <label class="container">Navigation
                    <input type="checkbox" checked="checked"></input>
                  </label>
                  <p>{'Result: ' + results.length}</p>
                </div>
                <div className='search__content'>

                    {
                        results.map(result => {
                            return <SearchItem data={result}/>
						})
                    }
					{!results.length && historyItems}
					{!results.length && tredingItems}
                </div>

            </div>
        </div>
    )
}

export default SearchModel