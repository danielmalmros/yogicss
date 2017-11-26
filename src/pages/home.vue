<template>
  <div class="main-content">
    <h1>Code Blocks</h1>
      <pre class="html">
        <code>
&lt;button&gt; class=&quot;yogi-base-button&quot;&gt;
    Base button
&lt;/button&gt;
        </code>
      </pre>

    <pre class="css">
      <code>
.yogi-base-button {
    display: block;
    background: transparent;
    border: 2px solid $base-button-border;
    padding: 10px 20px;
    cursor: pointer;
    -webkit-user-drag: none;
    user-select: none;
    box-sizing: border-box;
} 
      </code>
    </pre>

    <div>
      <h1>Example</h1>
      <button class="yogi-base-button">Base button</button>
    </div>


     <pre class="html">
        <code>
&lt;button&gt; class=&quot;yogi-base-button--disabled&quot;&gt;
    Base button
&lt;/button&gt;
        </code>
      </pre>

    <pre class="css">
      <code>
.yogi-base-button--disabled {
    display: block;
    background: transparent;
    border: 2px solid $base-button-border;
    opacity: 0.4;
    padding: 10px 20px;
    cursor: pointer;
    -webkit-user-drag: none;
    user-select: none;
    box-sizing: border-box;
}   
      </code>
    </pre>

    <div>
      <h1>Example</h1>
      <button class="yogi-base-button--disabled ">Base button</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
