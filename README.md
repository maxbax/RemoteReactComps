# RemoteReactComps

This library implements a shared react components suite for a company applications

## Description

The target is to update a set of vertical applications with the same ui components without recompile them.

As you can see in the example folder the idea is to have a remote Components library (*remoteComps in the example folder*)
which contains the ui components to share in other vertical applications.

Each vertical application (*the root project on example folder*) uses the *remote-react-comps* library, in particular the component **RemoteComp**. This component have the mandatory property name witch indicate the name of the real component have to render.
This component is not in this library, but is online downloaded from the remote component library named before.

In this example is indicated only one url for remote library, but with this technique we can imagine to split the remote library in more sub-library to optimize their download.

## View the example

In the example folder run:
    
    npm i
    npm start

*Note: this example use two ports simulating two repository: enable cors activity on browser*
