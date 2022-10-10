import React, {memo, useCallback, useEffect, useState} from "react";
import styled from 'styled-components'
import update from 'immutability-helper'
import {Dustbin} from "./dustbin";
import Box from "./box";
import PlayerAvatar from "../Games/playerBadge";
import {colors} from "../../../Helpers/UI/constants";



export const Players = memo(function Players({gamersList, spectatorsList}) {
    const [dustbins, setDustbins] = useState([])
    const [spectators, setSpectators] = useState([])
    const [droppedBoxNames, setDroppedBoxNames] = useState([])
    function isDropped(id) {
        return droppedBoxNames.indexOf(id) > -1
    }
    const handleDrop = useCallback(
        (index, item) => {
            console.log('handle drag ... ', index, item)
            const { name, id } = item
            console.log('dropped item ', item)
            setSpectators(current =>
                current.filter(obj => {
                    return obj.id !== id;
                }),
            );
            setDroppedBoxNames(
                update(droppedBoxNames, id ? { $push: [id] } : { $push: [] }),
            )
            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                        accepts: {
                            $set: [],
                        },
                    },
                }),
            )
        },
        [droppedBoxNames, dustbins],
    )

    useEffect(() => {
        gamersList.map(gamer => {
            if(gamer.id) {
                setDustbins(current => [...current, {accepts: [], lastDroppedItem: null}]);
            } else {
                setDustbins(current => [...current, {accepts: ['player'], lastDroppedItem: null}]);
            }
        })
    }, [gamersList])

    useEffect(() => {
        spectatorsList.map(spec => {
            setSpectators(current => [...current, { ...spec, type: 'player' }]);
        })
    }, [spectatorsList])
    console.log('dustbins.. ', dustbins)
    console.log('droppedBoxNames.. ', droppedBoxNames)
    return (
        <div>
            <GamersSection>
                    {dustbins.map((player, index) => (
                        <GamerItem>
                            <Dustbin
                                accept={player.accepts}
                                lastDroppedItem={player.lastDroppedItem}
                                player={player}
                                onDrop={(item) => handleDrop(index, item)}
                                key={index}
                            />
                        </GamerItem>
                    ))}
                {gamersList.map(gamer =>
                    <GamerItem>
                        {gamer.id ?
                            <>
                                <PlayerAvatar player={{avatar: gamer.avatar_url}} size={66}/>
                                <PlayerName>{gamer.name === 'MyUser' ? 'You' : gamer.name} ({gamer.host ? 'Host' : ''})</PlayerName>
                            </> :
                            <PlayerEmptyBadge/>
                        }
                    </GamerItem>
                )}
            </GamersSection>
            <SectionTitle>Spectators ({spectatorsList.length})</SectionTitle>
            <SpectatorSection>
                {spectators.map((spectator, index) => (
                    <>
                        <Box
                            spectator={spectator}
                            isDropped={isDropped(spectator.id)}
                            key={index}
                            index={index}
                        />
                    </>
                ))}
                {/*  {spectatorsList.map((spectator, index) =>
                    index % 4 === 0 ?
                        <>
                            <Separator/>
                            <SpectatorItem>
                                <PlayerAvatar player={{avatar: spectator.avatarUrl}} size={66}/>
                                <PlayerName>{spectator.name}</PlayerName>
                            </SpectatorItem>
                        </>
                        :
                        <SpectatorItem>
                            <PlayerAvatar player={{avatar: spectator.avatarUrl}} size={66}/>
                            <PlayerName>{spectator.name}</PlayerName>
                        </SpectatorItem>
                )}*/}
            </SpectatorSection>



        </div>
    )
})

const SpectatorSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SpectatorItem = styled.div`
    margin-bottom: 22px;
`

const Separator = styled.div`
  flex-basis: 100%;
`

const GamersSection = styled.div`
  display: flex;
  justify-content: space-between;
`

const GamerItem = styled.div`
`
const SectionTitle = styled.h3`
  font-family: Overpass, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.gray};
  margin: 24px 0 14px;
`

const PlayerEmptyBadge = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 38%;
  background-color: ${colors.beige};
  opacity: 0.35;

  @media (max-width: 355px) {
    width: 58px;
    height: 58px;
  }
`
const PlayerName = styled.h4`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  text-align: center;
  color: ${colors.white};
  margin: 6px 0 0;
`