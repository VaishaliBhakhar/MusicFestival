import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

type Band = {
    name: string;
    festival: string;
}

type MusicFestivalProps = {
    recordLabel: string;
    bands: Array<Band>;
}
type ErrorData = {
  message: string;
}

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function MusicFestival(): JSX.Element {
  const initialMusicFestivalData: Array<MusicFestivalProps> = [];
  const initialErrors: ErrorData = { message: '' };
  const [errors, setError] = useState(initialErrors);
  const [isLoaded, setIsLoaded] = useState(false);
  const [musicFestivalData, setMusicFestivalData] = useState(initialMusicFestivalData);

  const classes = useStyles();
  const renderChildItems = (bands: Array<Band>) => (
    bands.map((child) => (
      child.festival
        ? (
          <TreeItem key={child.name} nodeId={child.name} label={`Band Name:  ${child.name}`}>
            <TreeItem nodeId={child.festival} label={`Festival: ${child.festival}`} />
          </TreeItem>
        )
        : <TreeItem key={child.name} nodeId={child.name} label={`Band Name:  ${child.name}`} />
    ))
  );

  const renderTreeItem = (nodes: Array<MusicFestivalProps>) => (
    nodes.map((parent) => (
      <TreeItem key={parent.recordLabel} nodeId={parent.recordLabel} label={parent.recordLabel ? `Record Label:  ${parent.recordLabel}` : 'Record Label:  empty label'}>
        {renderChildItems(parent.bands)}
      </TreeItem>
    ))

  );

  useEffect(() => {
    fetch('http://localhost:8080/musicTest')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMusicFestivalData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (errors.message !== '') {
    return (
      <div>
        Error:
        {errors.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTreeItem(musicFestivalData)}
    </TreeView>
  );
}

export default MusicFestival;
