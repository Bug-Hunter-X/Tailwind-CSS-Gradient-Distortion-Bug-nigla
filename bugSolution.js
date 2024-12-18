```javascript
// Solution using explicit color values and fallback
<div className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] p-4 rounded-lg">
  <p>This should be a more accurate gradient</p>
</div>

// Alternative solution
<div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-lg">
  <p>Adding a via point might improve the gradient</p>
</div>

// Another solution
<div style={{background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'}} className="p-4 rounded-lg">
  <p>Using inline styles as a last resort</p>
</div>
```